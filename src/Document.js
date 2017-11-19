import React, {Component} from "react";
import {scaleLinear} from "d3-scale";
import {interpolateHcl} from "d3-interpolate";
import data from "./data.js"

class Word extends Component {
	render() {
		//console.log(this.props);
		const score = this.props.score;
		const color = this.props.colorScale(score);
		return (
			<span
			className="word"
			style={{backgroundColor: color}}
			title={score.toFixed(5)}
			>{this.props.word}
			{/**<span className="score">{score.toFixed(1)}</span>**/}
			</span>
			);
	}
}

class Document extends Component {
	render() {
		//console.log(this.props);
		const words = this.props.words;
		const vocab = this.props.vocab;
		const colorScale = this.props.colorScale;
		const scores = this.props.scores;
		const docIdx = this.props.docIdx;
		const docId = this.props.docId;
		const title = this.props.title;
		const footer = this.props.footer;
		const word_cols = words.map((word, wordIdx) => {
			const wordKey = `${wordIdx}_${docIdx}`;
			//console.log(word, scores, docid, wordKey);
			return (
				<Word
					key={wordKey}
					word={word}
					score={scores[docIdx].get(vocab.get(word))}
					colorScale={colorScale}
				>
				</Word>
				)
		});
		return (
			<div className="doc">
				<div className="doc-title">
					<strong>{docIdx+1}. <a href={"https://nips.cc/Conferences/2017/Schedule?showEvent="+docId}>{title}</a></strong>
				</div>
				<div className="doc-tokens">
				{word_cols}
				</div>
				<div className="doc-footer">
				{footer}
				</div>
			</div>
			);


	}
}

export class Corpus extends Component {
	constructor(props) {
		super(props);
		const corpus = data.map((doc) => {
			return {
				tokens: doc.title.toLowerCase().split(" "),
				title: doc.title,
				footer: doc.footer,
				docId: doc.id
			}
		});
		/*const corpus = [
			["the", "dog", "ate", "the", "cat"],
			["the", "cat", "ate", "the", "man"],
			["the", "man", "rode", "the", "bicycle"],
		];*/
		//console.log(corpus);
		const vocab = this.createVocab(corpus);
		this.state = {
			vocab: vocab,
			corpus: corpus,
		};
		//console.log(this.state);

	}

	createVocab(corpus) {
		let vocab = new Map();
		let scores = [];
		let scoreMax = 0;
		let scoreMin = 10000000;
		corpus.map((doc, docIdx) => {
			scores.push(new Map());
			doc.tokens.map((word) => {
				if(!vocab.has(word)){
					vocab.set(word, vocab.size);
				}
			})
		});
		return vocab;
	}


	generateScores(corpus, scoreType) {
		const vocab = this.state.vocab;
		let scores = corpus.reduce((scoreObj, doc) => {
			const docScores = doc.tokens.reduce((docScoreObj, word) => {
				//console.log("docScoreObj", docScoreObj);
				const wordIdx = vocab.get(word);
				if(!docScoreObj.localScoreMap.has(wordIdx)){
					docScoreObj.localScoreMap.set(wordIdx, 0);
				}
				if(!docScoreObj.globalScoreMap.has(wordIdx)){
					docScoreObj.globalScoreMap.set(wordIdx, 1);
				}
				const nextScore = docScoreObj.localScoreMap.get(wordIdx) + 1;
				docScoreObj.localScoreMap.set(wordIdx, nextScore);
				docScoreObj.docMin = Math.min(docScoreObj.docMin, nextScore);
				docScoreObj.docMax = Math.max(docScoreObj.docMax, nextScore);
				return docScoreObj;
			}, {
				scoreMap: new Map(),
				localScoreMap: new Map(),
				globalScoreMap: new Map(),
				docMax: 0,
				docMin: 10000000
			});
			scoreObj.localScores.push(docScores.localScoreMap);
			scoreObj.scoreMax = Math.max(scoreObj.scoreMax, docScores.docMax);
			scoreObj.scoreMin = Math.min(scoreObj.scoreMin, docScores.docMin);
			//console.log(doc, docScores);
			docScores.globalScoreMap.forEach((value, key) => {
				if(!scoreObj.globalScoreMap.has(key)){
					scoreObj.globalScoreMap.set(key, 0);
				}
				const keyScore = scoreObj.globalScoreMap.get(key) + value;
				scoreObj.globalScoreMap.set(key, keyScore);
			});
			return scoreObj;
		}, {
				scores: [],
				localScores: [],
				globalScoreMap: new Map(),
				scoreMax: 0,
				scoreMin: 10000000
			} 
		);
		console.log(scores);
		const localScoreMax = scores.scoreMax;
		//scores.scores = scores.localScores;
		scores = corpus.reduce((scoreObj, doc, docIdx) => {
			const docScores = doc.tokens.reduce((docScoreObj, word) => {
				//console.log("docScoreObj", docScoreObj);
				const wordIdx = vocab.get(word);
				const localScore = docScoreObj.localScoreMap.get(wordIdx);
				const globalScore = docScoreObj.globalScoreMap.get(wordIdx);
				/*
				Below line calculates the TF-IDF score
				TF = p(w|d) = tf(w, d)/sum_{w} (tf(w,d))
				IDF = -log(df(w)/sum_{d})
				*/
				const finalScore = (localScore/(doc.tokens.length))*(Math.log(corpus.length/globalScore));
				//console.log(docIdx, word, localScore, globalScore, finalScore);
				docScoreObj.scoreMap.set(wordIdx, finalScore);
				docScoreObj.docMin = Math.min(docScoreObj.docMin, finalScore);
				docScoreObj.docMax = Math.max(docScoreObj.docMax, finalScore);
				return docScoreObj;
			}, {
				scoreMap: new Map(),
				localScoreMap: scoreObj.localScores[docIdx],
				globalScoreMap: scoreObj.globalScoreMap,
				docMax: 0,
				docMin: 10000000
			});
			scoreObj.scores.push(docScores.scoreMap);
			scoreObj.scoreMax = Math.max(scoreObj.scoreMax, docScores.docMax);
			scoreObj.scoreMin = Math.min(scoreObj.scoreMin, docScores.docMin);
			return scoreObj;
		}, {
				scores: [],
				localScores: scores.localScores,
				globalScoreMap: scores.globalScoreMap,
				scoreMax: 0,
				scoreMin: 10000000
			} 
		);


		return scores;
	}

	render() {
		const scores = this.generateScores(this.state.corpus, "tf");
		const colorScale = scaleLinear()
		    .domain([scores.scoreMin, scores.scoreMax])
		   	//.interpolate(interpolateHcl)
		    .range(["white", "red"]);
		//console.log(scores);
		const documents = this.state.corpus.map((doc, docIdx) => {
			return (
				<Document 
					key={docIdx}
					docIdx={docIdx}
					words={doc.tokens}
					title={doc.title}
					footer={doc.footer}
					docId={doc.docId}
					vocab={this.state.vocab}
					scores={scores.scores}
					colorScale={colorScale}
				></Document>
				
				);
		});
		return (
			<div className="corpus">
			{documents}
			</div>
			);

	}
}