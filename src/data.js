/**

Go to: https://nips.cc/Conferences/2017/Schedule?type=Poster
Run the following in console:
```
let items = document.querySelectorAll(".maincard .maincardBody");
let titles = [];
items.forEach((item) => titles.push(item.outerText));
console.log(JSON.stringify(titles));
```

```
let items = document.querySelectorAll(".maincard");
let data = [];
items.forEach((item) => {
    const title = item.querySelector(".maincardBody").outerText;
    const footer = item.querySelector(".maincardFooter").outerText;
    const itemId = item.id.split("_")[1]; 
    data.push({
        title: title,
        footer: footer,
        id: itemId
    });
});
console.log(JSON.stringify(data));
```

Copy the data from console to this file.

**/

const data = [
   {
      "title":"Learning Active Learning from Data",
      "footer":"Ksenia Konyushkova · Raphael Sznitman · Pascal Fua",
      "id":"9202"
   },
   {
      "title":"Scalable Variational Inference for Dynamical Systems",
      "footer":"Stefan Bauer · Nico S Gorbach · Joachim M Buhmann",
      "id":"9257"
   },
   {
      "title":"Active Learning from Peers",
      "footer":"Keerthiram Murugesan · Jaime Carbonell",
      "id":"9467"
   },
   {
      "title":"Gradient Episodic Memory for Continuum Learning",
      "footer":"David Lopez-Paz · Marc'Aurelio Ranzato",
      "id":"9416"
   },
   {
      "title":"Consistent Multitask Learning with Nonlinear Output Relations",
      "footer":"Carlo Ciliberto · Alessandro Rudi · Lorenzo Rosasco · Massimiliano Pontil",
      "id":"8987"
   },
   {
      "title":"Joint distribution optimal transportation for domain adaptation",
      "footer":"Nicolas Courty · Rémi Flamary · Amaury Habrard · Alain Rakotomamonjy",
      "id":"9155"
   },
   {
      "title":"Learning Multiple Tasks with Deep Relationship Networks",
      "footer":"Mingsheng Long · Jianmin Wang · Philip S Yu",
      "id":"8950"
   },
   {
      "title":"Label Efficient Learning of Transferable Representations acrosss Domains and Tasks",
      "footer":"Zelun Luo · Yuliang Zou · Judy Hoffman · Li Fei-Fei",
      "id":"8814"
   },
   {
      "title":"Matching neural paths: transfer from recognition to correspondence search",
      "footer":"Nikolay Savinov · Lubor Ladicky · Marc Pollefeys",
      "id":"8913"
   },
   {
      "title":"Do Deep Neural Networks Suffer from Crowding?",
      "footer":"Anna Volokitin · Gemma Roig · Tomaso A Poggio",
      "id":"9337"
   },
   {
      "title":"SVCCA: Singular Vector Canonical Correlation Analysis for Deep Understanding and Improvement",
      "footer":"Maithra Raghu · Justin Gilmer · Jason Yosinski · Jascha Sohl-Dickstein",
      "id":"9379"
   },
   {
      "title":"Neural Expectation Maximization",
      "footer":"Klaus Greff · Sjoerd van Steenkiste · Jürgen Schmidhuber",
      "id":"9437"
   },
   {
      "title":"PointNet++: Deep Hierarchical Feature Learning on Point Sets in a Metric Space",
      "footer":"Charles Ruizhongtai Qi · Li Yi · Hao Su · Leonidas J Guibas",
      "id":"9286"
   },
   {
      "title":"Preserving Proximity and Global Ranking for Node Embedding",
      "footer":"Yi-An Lai · Chin-Chi Hsu · Wen Hao Chen · Mi-Yen Yeh · Shou-De Lin",
      "id":"9301"
   },
   {
      "title":"Unsupervised Transformation Learning via Convex Relaxations",
      "footer":"Tatsunori B Hashimoto · Percy Liang · John C Duchi",
      "id":"9454"
   },
   {
      "title":"Hunt For The Unique, Stable, Sparse And Fast Feature Learning On Graphs",
      "footer":"Saurabh Verma · Zhi-Li Zhang",
      "id":"8807"
   },
   {
      "title":"Deep Subspace Clustering Network",
      "footer":"Pan Ji · Tong Zhang · Hongdong Li · Mathieu Salzmann · Ian Reid",
      "id":"8800"
   },
   {
      "title":"Learning Graph Embeddings with Embedding Propagation",
      "footer":"Alberto Garcia Duran · Mathias Niepert",
      "id":"9288"
   },
   {
      "title":"Unsupervised Sequence Classification using Sequential Output Statistics",
      "footer":"Yu Liu · Jianshu Chen · Li Deng",
      "id":"9138"
   },
   {
      "title":"Context Selection for Embedding Models",
      "footer":"Liping Liu · Francisco Ruiz · David Blei",
      "id":"9258"
   },
   {
      "title":"Probabilistic Rule Realization and Selection",
      "footer":"Haizi Yu · Tianxi Li · Lav Varshney",
      "id":"8947"
   },
   {
      "title":"Trimmed Density Ratio Estimation",
      "footer":"Song Liu · Akiko Takeda · Taiji Suzuki · Kenji Fukumizu",
      "id":"9229"
   },
   {
      "title":"A Minimax Optimal Algorithm for Crowdsourcing",
      "footer":"Richard Combes · Thomas Bonald",
      "id":"9214"
   },
   {
      "title":"Introspective Classification with Convolutional Nets",
      "footer":"Long Jin · Justin Lazarow · Zhuowen Tu",
      "id":"8877"
   },
   {
      "title":"Adaptive Classification for Prediction Under a Budget",
      "footer":"Feng Nan · Venkatesh Saligrama",
      "id":"9249"
   },
   {
      "title":"Learning with Feature Evolvable Streams",
      "footer":"Bo-Jian Hou · Lijun Zhang · Zhi-Hua Zhou",
      "id":"8933"
   },
   {
      "title":"Aggressive Sampling for Multi-class to Binary Reduction with Applications to Text Classification",
      "footer":"Bikash Joshi · Massih-Reza Amini · Ioannis Partalas · Franck Iutzeler · Yury Maximov",
      "id":"9196"
   },
   {
      "title":"Adversarial Surrogate Losses for Ordinal Regression",
      "footer":"Rizal Fathony · Mohammad Ali Bashiri · Brian Ziebart",
      "id":"8852"
   },
   {
      "title":"Formal Guarantees on the Robustness of a Classifier against Adversarial Manipulation",
      "footer":"Matthias Hein · Maksym Andriushchenko",
      "id":"9014"
   },
   {
      "title":"Cost efficient gradient boosting",
      "footer":"Sven Peter · Ferran Diego · Fred Hamprecht · Boaz Nadler",
      "id":"8946"
   },
   {
      "title":"A Highly Efficient Gradient Boosting Decision Tree",
      "footer":"Guolin Ke · Qi Meng · Taifeng Wang · Wei Chen · Weidong Ma · Tie-Yan Liu",
      "id":"9099"
   },
   {
      "title":"Estimating Accuracy from Unlabeled Data: A Probabilistic Logic Approach",
      "footer":"Emmanouil Platanios · Hoifung Poon · Tom M Mitchell · Eric J Horvitz",
      "id":"9215"
   },
   {
      "title":"Inferring Generative Model Structure with Static Analysis",
      "footer":"Paroma Varma · Bryan He · Payal Bajaj · Nishith Khandwala · Christopher Ré",
      "id":"8821"
   },
   {
      "title":"Scalable Model Selection for Belief Networks",
      "footer":"Zhao Song · Yusuke Muraoka · Ryohei Fujimaki · Lawrence Carin",
      "id":"9238"
   },
   {
      "title":"Time-dependent spatially varying graphical models, with application to brain fMRI data analysis",
      "footer":"Kristjan Greenewald · Seyoung Park · Shuheng Zhou · Alexander Giessing",
      "id":"9356"
   },
   {
      "title":"A Bayesian Data Augmentation Approach for Learning Deep Models",
      "footer":"Toan Tran · Trung Pham · Gustavo Carneiro · Lyle Palmer · Ian Reid",
      "id":"9065"
   },
   {
      "title":"Union of Intersections (UoI) for Interpretable Data Driven Discovery and Prediction",
      "footer":"Kristofer Bouchard · Alejandro Bujan · Farbod Roosta-Khorasani · Shashanka Ubaru · Mr. Prabhat · Antoine Snijders · Jian-Hua Mao · Edward Chang · Michael W Mahoney · Sharmodeep Bhattacharya",
      "id":"8901"
   },
   {
      "title":"Deep Learning with Topological Signatures",
      "footer":"Christoph Hofer · Roland Kwitt · Marc Niethammer · Andreas Uhl",
      "id":"8954"
   },
   {
      "title":"Practical Hash Functions for Similarity Estimation and Dimensionality Reduction",
      "footer":"Søren Dahlgaard · Mathias Knudsen · Mikkel Thorup",
      "id":"9430"
   },
   {
      "title":"Maxing and Ranking with Few Assumptions",
      "footer":"Venkatadheeraj Pichapati · Alon Orlitsky · Vaishakh Ravindrakumar · Moein Falahatgar · Yi Hao",
      "id":"9472"
   },
   {
      "title":"Kernel functions based on triplet comparisons",
      "footer":"Matthäus Kleindessner · Ulrike von Luxburg",
      "id":"9448"
   },
   {
      "title":"Learning A Structured Optimal Bipartite Graph for Co-Clustering",
      "footer":"Feiping Nie · Xiaoqian Wang · Heng Huang",
      "id":"9193"
   },
   {
      "title":"Multi-way Interacting Regression via Factorization Machines",
      "footer":"Mikhail Yurochkin · XuanLong Nguyen · nikolaos Vasiloglou",
      "id":"9046"
   },
   {
      "title":"Maximum Margin Interval Trees",
      "footer":"Alexandre Drouin · Toby Hocking · Francois Laviolette",
      "id":"9271"
   },
   {
      "title":"Kernel Feature Selection via Conditional Covariance Minimization",
      "footer":"Jianbo Chen · Mitchell Stern · Martin J Wainwright · Michael Jordan",
      "id":"9461"
   },
   {
      "title":"Improved Graph Laplacian via Geometric Self-Consistency",
      "footer":"Dominique Joncas · Marina Meila · James McQueen",
      "id":"9223"
   },
   {
      "title":"Mixture-Rank Matrix Approximation for Collaborative Filtering",
      "footer":"Dongsheng Li · Chao Chen · Wei Liu · Tun Lu · Ning Gu · Stephen Chu",
      "id":"8844"
   },
   {
      "title":"Predictive State Recurrent Neural Networks",
      "footer":"Carlton Downey · Ahmed Hefny · Byron Boots · Geoffrey Gordon · Boyue Li",
      "id":"9377"
   },
   {
      "title":"Hierarchical Methods of Moments",
      "footer":"Matteo Ruffini · Guillaume Rabusseau · Borja Balle",
      "id":"8979"
   },
   {
      "title":"Multitask Spectral Learning of Weighted Automata",
      "footer":"Guillaume Rabusseau · Borja Balle · Joelle Pineau",
      "id":"9045"
   },
   {
      "title":"Generative Local Metric Learning for Kernel Regression",
      "footer":"Yung-Kyun Noh · Masashi Sugiyama · Kee-Eung Kim · Frank Park · Daniel Lee",
      "id":"9032"
   },
   {
      "title":"Principles of Riemannian Geometry in Neural Networks",
      "footer":"Michael Hauser · Asok Ray",
      "id":"9066"
   },
   {
      "title":"Subset Selection for Sequential Data",
      "footer":"Ehsan Elhamifar",
      "id":"8897"
   },
   {
      "title":"On Quadratic Convergence of DC Proximal Newton Algorithm in Nonconvex Sparse Learning",
      "footer":"Xingguo Li · Lin Yang · Jason Ge · Jarvis Haupt · Tong Zhang · Tuo Zhao",
      "id":"9060"
   },
   {
      "title":"Fast, Sample-Efficient Algorithms for Structured Phase Retrieval",
      "footer":"Gauri Jagatap · Chinmay Hegde",
      "id":"9268"
   },
   {
      "title":"k-Support and Ordered Weighted Sparsity for Overlapping Groups: Hardness and Algorithms",
      "footer":"Cong Han Lim · Stephen Wright",
      "id":"8825"
   },
   {
      "title":"Parametric Simplex Method for Sparse Learning",
      "footer":"Haotian Pang · Tuo Zhao · Han Liu · Robert J Vanderbei",
      "id":"8816"
   },
   {
      "title":"Learned D-AMP: Principled Neural-network-based Compressive Image Recovery",
      "footer":"Chris Metzler · Ali Mousavi · Richard Baraniuk",
      "id":"8967"
   },
   {
      "title":"FALKON: An Optimal Large Scale Kernel Method",
      "footer":"Alessandro Rudi · Luigi Carratino · Lorenzo Rosasco",
      "id":"9170"
   },
   {
      "title":"Recursive Sampling for the Nystrom Method",
      "footer":"Cameron Musco · Christopher Musco",
      "id":"9165"
   },
   {
      "title":"Efficient Approximation Algorithms for Strings Kernel Based Sequence Classification",
      "footer":"Muhammad Farhan · Juvaria Tariq · Arif Zaman · Mudassir Shabbir · Imdad Ullah Khan",
      "id":"9460"
   },
   {
      "title":"Robust Hypothesis Test for Functional Effect with Gaussian Processes",
      "footer":"Jeremiah Liu · Brent Coull",
      "id":"8874"
   },
   {
      "title":"Invariance and Stability of Deep Convolutional Representations",
      "footer":"Alberto Bietti · Julien Mairal",
      "id":"9392"
   },
   {
      "title":"Testing and Learning on Distributions with Symmetric Noise Invariance",
      "footer":"Law Ho Chung · Christopher Yau · Dino Sejdinovic",
      "id":"8926"
   },
   {
      "title":"An Empirical Study on The Properties of Random Bases for Kernel Methods",
      "footer":"Maximilian Alber · Pieter-Jan Kindermans · Kristof Schütt · Klaus-Robert Müller · Fei Sha",
      "id":"9062"
   },
   {
      "title":"Max-Margin Invariant Features from Transformed Unlabelled Data",
      "footer":"Dipan Pal · Ashwin Kannan · Gautam Arakalgud · Marios Savvides",
      "id":"8935"
   },
   {
      "title":"SafetyNets: Verifiable Execution of Deep Neural Networks on an Untrusted Cloud",
      "footer":"Zahra Ghodsi · Tianyu Gu · Siddharth Garg",
      "id":"9244"
   },
   {
      "title":"Multi-output Polynomial Networks and Factorization Machines",
      "footer":"Mathieu Blondel · Vlad Niculae · Takuma Otsuka · Naonori Ueda",
      "id":"9119"
   },
   {
      "title":"The Neural Hawkes Process: A Neurally Self-Modulating Multivariate Point Process",
      "footer":"Hongyuan Mei · Jason Eisner",
      "id":"9443"
   },
   {
      "title":"Maximizing the Spread of Influence from Training Data",
      "footer":"Eric Balkanski · Nicole Immorlica · Yaron Singer",
      "id":"9359"
   },
   {
      "title":"Inductive Representation Learning on Large Graphs",
      "footer":"Will Hamilton · Zhitao Ying · Jure Leskovec",
      "id":"8896"
   },
   {
      "title":"A Meta-Learning Perspective on Cold-Start Recommendations for Items",
      "footer":"Manasi Vartak · Hugo Larochelle · Arvind Thiagarajan",
      "id":"9457"
   },
   {
      "title":"DropoutNet: Addressing Cold Start in Recommender Systems",
      "footer":"Maksims Volkovs · Guangwei Yu · Tomi Poutanen",
      "id":"9272"
   },
   {
      "title":"Federated Multi-Task Learning",
      "footer":"Virginia Smith · Maziar Sanjabi · Chao-Kai Chiang · Ameet S Talwalkar",
      "id":"9220"
   },
   {
      "title":"Flexpoint: An Adaptive Numerical Format for Efficient Training of Deep Neural Networks",
      "footer":"Arjun K Bansal · William Constable · Oguz Elibol · Stewart Hall · Luke Hornof · Amir Khosrowshahi · Carey Kloss · Urs Köster · Marcel Nassar · Naveen Rao · Xin Wang · Tristan Webb",
      "id":"8964"
   },
   {
      "title":"Bayesian Inference of Individualized Treatment Effects using Multi-task Gaussian Processes",
      "footer":"Ahmed M. Alaa · Mihaela van der Schaar",
      "id":"9126"
   },
   {
      "title":"Tomography of the London Underground: a Scalable Model for Origin-Destination Data",
      "footer":"Nicolò Colombo · Ricardo Silva · Soong Moon Kang",
      "id":"9091"
   },
   {
      "title":"Matching on Balanced Nonlinear Representations for Treatment Effects Estimation",
      "footer":"Sheng Li · Yun Fu",
      "id":"8887"
   },
   {
      "title":"MolecuLeNet: A continuous-filter convolutional neural network for modeling quantum interactions",
      "footer":"Kristof Schütt · Pieter-Jan Kindermans · Huziel Enoc Sauceda Felix · Stefan Chmiela · Alexandre Tkatchenko · Klaus-Robert Müller",
      "id":"8893"
   },
   {
      "title":"Hiding Images in Plain Sight: Deep Steganography",
      "footer":"Shumeet Baluja",
      "id":"8995"
   },
   {
      "title":"Universal Style Transfer via Feature Transforms",
      "footer":"Yijun Li · Chen Fang · Jimei Yang · Zhaowen Wang · Xin Lu · Ming-Hsuan Yang",
      "id":"8835"
   },
   {
      "title":"Attend and Predict: Understanding Gene Regulation by Selective Attention on Chromatin",
      "footer":"Ritambhara Singh · Jack Lanchantin · Yanjun Qi",
      "id":"9446"
   },
   {
      "title":"Unbounded cache model for online language modeling with open vocabulary",
      "footer":"Edouard Grave · Moustapha Cisse · Armand Joulin",
      "id":"9376"
   },
   {
      "title":"Deconvolutional Paragraph Representation Learning",
      "footer":"Yizhe Zhang · Dinghan Shen · Guoyin Wang · Zhe Gan · Ricardo Henao · Lawrence Carin",
      "id":"9197"
   },
   {
      "title":"Analyzing Hidden Representations in End-to-End Automatic Speech Recognition Systems",
      "footer":"Yonatan Belinkov · James Glass",
      "id":"9031"
   },
   {
      "title":"Best of Both Worlds: Transferring Knowledge from Discriminative Learning to a Generative Visual Dialog Model",
      "footer":"Jiasen Lu · Anitha Kannan · Jianwei Yang · Dhruv Batra · Devi Parikh",
      "id":"8828"
   },
   {
      "title":"Teaching Machines to Describe Images with Natural Language Feedback",
      "footer":"huan ling · Sanja Fidler",
      "id":"9283"
   },
   {
      "title":"High-Order Attention Models for Visual Question Answering",
      "footer":"Idan Schwartz · Alexander Schwing · Tamir Hazan",
      "id":"9149"
   },
   {
      "title":"Visual Reference Resolution using Attention Memory for Visual Dialog",
      "footer":"Paul Hongsuck Seo · Andreas Lehrmann · Bohyung Han · Leonid Sigal",
      "id":"9154"
   },
   {
      "title":"Semi-Supervised Learning for Optical Flow with Generative Adversarial Networks",
      "footer":"Wei-Sheng Lai · Jia-Bin Huang · Ming-Hsuan Yang",
      "id":"8832"
   },
   {
      "title":"Associative Embedding: End-to-End Learning for Joint Detection and Grouping",
      "footer":"Alejandro Newell · Zhiao Huang · Jia Deng",
      "id":"9015"
   },
   {
      "title":"Learning Deep Structured Multi-Scale Features using Attention-Gated CRFs for Contour Prediction",
      "footer":"Dan Xu · Wanli Ouyang · Xavier Alameda-Pineda · Elisa Ricci · Xiaogang Wang · Nicu Sebe",
      "id":"9177"
   },
   {
      "title":"Incorporating Side Information by Adaptive Convolution",
      "footer":"Di Kang · Debarun Dhar · Antoni Chan",
      "id":"9168"
   },
   {
      "title":"Learning a Multi-View Stereo Machine",
      "footer":"Abhishek Kar · Jitendra Malik · Christian Häne",
      "id":"8833"
   },
   {
      "title":"Pose Guided Person Image Generation",
      "footer":"Liqian Ma · Xu Jia · Qianru Sun · Bernt Schiele · Tinne Tuytelaars · Luc Van Gool",
      "id":"8837"
   },
   {
      "title":"Working hard to know your neighbor's margins: Local descriptor learning loss",
      "footer":"Anastasiia Mishchuk · Dmytro Mishkin · Filip Radenovic · Jiri Matas",
      "id":"9259"
   },
   {
      "title":"Multimodal Image-to-Image Translation by Enforcing Bi-Cycle Consistency",
      "footer":"Jun-Yan Zhu · Richard Zhang · Deepak Pathak · Trevor Darrell · Oliver Wang · Eli Shechtman · Alexei Efros",
      "id":"8843"
   },
   {
      "title":"Deep supervised discrete hashing",
      "footer":"Qi Li · Zhenan Sun · Ran He · Tieniu Tan",
      "id":"9035"
   },
   {
      "title":"SVD-Softmax: Fast Softmax Approximation on Large Vocabulary Neural Networks",
      "footer":"Kyuhong Shim · Minjae Lee · Iksoo Choi · Yoonho Boo · Wonyong Sung",
      "id":"9321"
   },
   {
      "title":"Hash Embeddings for Efficient Word Representations",
      "footer":"Dan Tito Svenstrup · Jonas Hansen · Ole Winther",
      "id":"9269"
   },
   {
      "title":"A Regularized Framework for Sparse and Structured Neural Attention",
      "footer":"Vlad Niculae · Mathieu Blondel",
      "id":"9118"
   },
   {
      "title":"Attentional Pooling for Action Recognition",
      "footer":"Rohit Girdhar · Deva Ramanan",
      "id":"8801"
   },
   {
      "title":"Plan, Attend, Generate: Planning for Sequence-to-Sequence Models",
      "footer":"Caglar Gulcehre · Francis Dutil · Adam Trischler · Yoshua Bengio",
      "id":"9322"
   },
   {
      "title":"Dilated Recurrent Neural Networks",
      "footer":"Shiyu Chang · Yang Zhang · Wei Han · Mo Yu · Xiaoxiao Guo · Wei Tan · Xiaodong Cui · Michael Witbrock · Mark A Hasegawa-Johnson · Thomas Huang",
      "id":"8806"
   },
   {
      "title":"Thalamus Gated Recurrent Modules",
      "footer":"Danijar Hafner · Alexander Irpan · James Davidson · Nicolas Heess",
      "id":"9440"
   },
   {
      "title":"Wasserstein Learning of Deep Generative Point Process Models",
      "footer":"SHUAI XIAO · Mehrdad Farajtabar · Xiaojing Ye · Junchi Yan · Le Song · Hongyuan Zha",
      "id":"9109"
   },
   {
      "title":"Stabilizing Training of Generative Adversarial Networks through Regularization",
      "footer":"Kevin Roth · Aurelien Lucchi · Sebastian Nowozin · Thomas Hofmann",
      "id":"8990"
   },
   {
      "title":"Neural Variational Inference and Learning in Undirected Graphical Models",
      "footer":"Volodymyr Kuleshov · Stefano Ermon",
      "id":"9441"
   },
   {
      "title":"Adversarial Symmetric Variational Autoencoder",
      "footer":"Yuchen Pu · Weiyao Wang · Ricardo Henao · Liqun Chen · Zhe Gan · Chunyuan Li · Lawrence Carin",
      "id":"9212"
   },
   {
      "title":"Diverse and Accurate Image Description Using a Variational Auto-Encoder with an Additive Gaussian Encoding Space",
      "footer":"Liwei Wang · Alexander Schwing · Svetlana Lazebnik",
      "id":"9349"
   },
   {
      "title":"Z-Forcing: Training Stochastic Recurrent Networks",
      "footer":"Anirudh Goyal ALIAS PARTH GOYAL · Alessandro Sordoni · Marc-Alexandre Côté · Nan Ke · Yoshua Bengio",
      "id":"9439"
   },
   {
      "title":"One-Shot Imitation Learning",
      "footer":"Yan Duan · Marcin Andrychowicz · Bradly Stadie · OpenAI Jonathan Ho · Jonas Schneider · Ilya Sutskever · Pieter Abbeel · Wojciech Zaremba",
      "id":"8902"
   },
   {
      "title":"Reconstruct & Crush Network",
      "footer":"Erinc Merdivan · Mohammad Reza Loghmani · Matthieu Geist",
      "id":"9232"
   },
   {
      "title":"Fader Networks: Generating Image Variations by Sliding Attribute Values",
      "footer":"Guillaume Lample · Neil Zeghidour · Nicolas Usunier · Antoine Bordes · Ludovic DENOYER · Marc'Aurelio Ranzato",
      "id":"9369"
   },
   {
      "title":"PredRNN: Recurrent Neural Networks for Video Prediction using Spatiotemporal LSTMs",
      "footer":"Yunbo Wang · Mingsheng Long · Jianmin Wang · Philip S Yu",
      "id":"8882"
   },
   {
      "title":"Multi-agent Predictive Modeling with Attentional CommNets",
      "footer":"Yedid Hoshen",
      "id":"9056"
   },
   {
      "title":"Real Time Image Saliency for Black Box Classifiers",
      "footer":"Piotr Dabkowski · Yarin Gal",
      "id":"9463"
   },
   {
      "title":"Prototypical Networks for Few-shot Learning",
      "footer":"Jake Snell · Kevin Swersky · Richard Zemel",
      "id":"9188"
   },
   {
      "title":"Few-Shot Learning Through an Information Retrieval Lens",
      "footer":"Eleni Triantafillou · Richard Zemel · Raquel Urtasun",
      "id":"9013"
   },
   {
      "title":"The Reversible Residual Network: Backpropagation Without Storing Activations",
      "footer":"Aidan N Gomez · Mengye Ren · Raquel Urtasun · Roger Grosse",
      "id":"9009"
   },
   {
      "title":"Gated Recurrent Convolution Neural Network for OCR",
      "footer":"Jianfeng Wang · Xiaolin Hu",
      "id":"8830"
   },
   {
      "title":"Learning Efficient Object Detection Models with Knowledge Distillation",
      "footer":"Guobin Chen · Wongun Choi · Xiang Yu · Tony Han · Manmohan Chandraker",
      "id":"8869"
   },
   {
      "title":"Active Bias: Training a More Accurate Neural Network by Emphasizing High Variance Samples",
      "footer":"Haw-Shiuan Chang · Andrew McCallum · Erik Learned-Miller",
      "id":"8894"
   },
   {
      "title":"Decoupling \"when to update\" from \"how to update\"",
      "footer":"Eran Malach · Shai Shalev-Shwartz",
      "id":"8890"
   },
   {
      "title":"Langevin Dynamics with Continuous Tempering for Training Deep Neural Networks",
      "footer":"Nanyang Ye · Zhanxing Zhu · Rafal Mantiuk",
      "id":"8857"
   },
   {
      "title":"Differentiable Learning of Logical Rules for Knowledge Base Reasoning",
      "footer":"Fan Yang · Zhilin Yang · William W Cohen",
      "id":"9019"
   },
   {
      "title":"Deliberation Networks: Sequence Generation Beyond One-Pass Decoding",
      "footer":"Yingce Xia · Lijun Wu · Jianxin Lin · Fei Tian · Tao Qin · Tie-Yan Liu",
      "id":"8968"
   },
   {
      "title":"Neural Program Meta-Induction",
      "footer":"Jacob Devlin · Rudy R Bunel · Rishabh Singh · Matthew Hausknecht · Pushmeet Kohli",
      "id":"8996"
   },
   {
      "title":"Saliency-based Sequential Image Attention with Multiset Prediction",
      "footer":"Sean Welleck · Kyunghyun Cho · Zheng Zhang",
      "id":"9293"
   },
   {
      "title":"Protein Interface Prediction using Graph Convolutional Networks",
      "footer":"Alex Fout · Basir Shariat · Jonathon Byrd · Asa Ben-Hur",
      "id":"9422"
   },
   {
      "title":"Dual-Agent GANs for Photorealistic and Identity Preserving Profile Face Synthesis",
      "footer":"Jian Zhao · Lin Xiong · Panasonic Karlekar Jayashree · Jianshu Li · Fang Zhao · Zhecan Wang · Panasonic Sugiri Pranata · Panasonic Shengmei Shen · Jiashi Feng",
      "id":"8805"
   },
   {
      "title":"Toward Robustness against Label Noise in Training Deep Discriminative Neural Networks",
      "footer":"Arash Vahdat",
      "id":"9334"
   },
   {
      "title":"Soft-to-Hard Vector Quantization for End-to-End Learning Compressible Representations",
      "footer":"Eirikur Agustsson · Fabian Mentzer · Michael Tschannen · Lukas Cavigelli · Radu Timofte · Luca Benini · Luc V Gool",
      "id":"8907"
   },
   {
      "title":"Selective Classification for Deep Neural Networks",
      "footer":"Yonatan Geifman · Ran El-Yaniv",
      "id":"9264"
   },
   {
      "title":"Deep Lattice Networks and Partial Monotonic Functions",
      "footer":"Seungil You · David Ding · Kevin Canini · Jan Pfeifer · Maya Gupta",
      "id":"9083"
   },
   {
      "title":"Learning to Prune Deep Neural Networks via Layer-wise Optimal Brain Surgeon",
      "footer":"Xin Dong · Shangyu Chen · Sinno Pan",
      "id":"9262"
   },
   {
      "title":"Bayesian Compression for Deep Learning",
      "footer":"Christos Louizos · Karen Ullrich · Max Welling",
      "id":"9113"
   },
   {
      "title":"Lower bounds on the robustness to adversarial perturbations",
      "footer":"Jonathan Peck · Yvan Saeys · Bart Goossens · Joris Roels",
      "id":"8875"
   },
   {
      "title":"Sobolev Training for Neural Networks",
      "footer":"Wojciech M. Czarnecki · Simon Osindero · Max Jaderberg · Grzegorz Swirszcz · Razvan Pascanu",
      "id":"9207"
   },
   {
      "title":"Structured Bayesian Pruning via Log-Normal Multiplicative Noise",
      "footer":"Kirill Neklyudov · Dmitry Molchanov · Arsenii Ashukha · Dmitry Vetrov",
      "id":"9445"
   },
   {
      "title":"Population Matching Discrepancy and Applications in Deep Learning",
      "footer":"Jianfei Chen · Chongxuan LI · Yizhong Ru · Jun Zhu",
      "id":"9397"
   },
   {
      "title":"Investigating the learning dynamics of deep neural networks using random matrix theory",
      "footer":"Jeffrey Pennington · Samuel Schoenholz · Surya Ganguli",
      "id":"9255"
   },
   {
      "title":"Robust Imitation of Diverse Behaviors",
      "footer":"Ziyu Wang · Josh Merel · Scott Reed · Nando de Freitas · Gregory Wayne · Nicolas Heess",
      "id":"9307"
   },
   {
      "title":"Question Asking as Program Generation",
      "footer":"Anselm Rothe · Brenden Lake · Todd Gureckis",
      "id":"8898"
   },
   {
      "title":"Variational Laws of Visual Attention for Dynamic Scenes",
      "footer":"Dario Zanca · Marco Gori",
      "id":"9164"
   },
   {
      "title":"Flexible statistical inference for mechanistic models of neural dynamics",
      "footer":"Jan-Matthis Lueckmann · Pedro J Goncalves · Giacomo Bassetto · Kaan Oecal · Marcel Nonnenmacher · Jakob H Macke",
      "id":"8921"
   },
   {
      "title":"Training recurrent networks to generate hypotheses about how the brain solves hard navigation problems",
      "footer":"Ingmar Kanitscheider · Ila Fiete",
      "id":"9230"
   },
   {
      "title":"YASS: Yet Another Spike Sorter",
      "footer":"Jin Hyung Lee · David E Carlson · Hooshmand Shokri Razaghi · Weichi Yao · Georges A Goetz · E.J. Chichilnisky · Espen Hagen · Gaute T. Einevoll · Liam Paninski",
      "id":"9181"
   },
   {
      "title":"Neural system identification for large populations separating \"what\" and \"where\"",
      "footer":"David Klindt · Alexander Ecker · Thomas Euler · Matthias Bethge",
      "id":"9134"
   },
   {
      "title":"A simple model of recognition and recall memory",
      "footer":"Nisheeth Srivastava · Edward Vul",
      "id":"8826"
   },
   {
      "title":"Gaussian process based nonlinear latent structure discovery in multivariate spike train data",
      "footer":"Anqi Wu · Nicholas Roy · Stephen Keeley · Jonathan W Pillow",
      "id":"9133"
   },
   {
      "title":"Deep adversarial neural decoding",
      "footer":"Yağmur Güçlütürk · Umut Güçlü · Katja Seeliger · Sander Bosch · Rob van Lier · Marcel A. J. van Gerven",
      "id":"9204"
   },
   {
      "title":"Cross-Spectral Factor Analysis",
      "footer":"Neil Gallagher · Kyle Ulrich · Austin Talbot · Kafui Dzirasa · David E Carlson · Lawrence Carin",
      "id":"9451"
   },
   {
      "title":"Cognitive Impairment Prediction in Alzheimer’s Disease with Regularized Modal Regression",
      "footer":"Xiaoqian Wang · Hong Chen · Dinggang Shen · Heng Huang",
      "id":"8936"
   },
   {
      "title":"Stochastic Submodular Maximization: The Case of Coverage Functions",
      "footer":"Mohammad Karimi · Mario Lucic · Hamed Hassani · Andreas Krause",
      "id":"9452"
   },
   {
      "title":"Gradient Methods for Submodular Maximization",
      "footer":"Hamed Hassani · Mahdi Soltanolkotabi · Amin Karbasi",
      "id":"9357"
   },
   {
      "title":"Non-convex Finite-Sum Optimization Via SCSG Methods",
      "footer":"Lihua Lei · Cheng Ju · Jianbo Chen · Michael Jordan",
      "id":"9022"
   },
   {
      "title":"Influence Maximization with ε-Almost Submodular Threshold Function",
      "footer":"Qiang Li · Wei Chen · Institute of Computing Xiaoming Sun · Institute of Computing Jialin Zhang",
      "id":"9162"
   },
   {
      "title":"Subset Selection under Noise",
      "footer":"Chao Qian · Jing-Cheng Shi · Yang Yu · Ke Tang · Zhi-Hua Zhou",
      "id":"9139"
   },
   {
      "title":"Polynomial time algorithms for dual volume sampling",
      "footer":"Chengtao Li · Stefanie Jegelka · Suvrit Sra",
      "id":"9280"
   },
   {
      "title":"Lookahead Bayesian Optimization with Inequality Constraints",
      "footer":"Remi Lam · Karen Willcox",
      "id":"8978"
   },
   {
      "title":"Non-monotone Continuous DR-submodular Maximization: Structure and Algorithms",
      "footer":"An Bian · Joachim M Buhmann · Andreas Krause · Kfir Levy",
      "id":"8845"
   },
   {
      "title":"Solving (Almost) all Systems of Random Quadratic Equations",
      "footer":"Gang Wang · Georgios Giannakis · Yousef Saad · Jie Chen",
      "id":"8976"
   },
   {
      "title":"Learning ReLUs via Gradient Descent",
      "footer":"Mahdi Soltanolkotabi",
      "id":"8989"
   },
   {
      "title":"Stochastic Mirror Descent for Non-Convex Optimization",
      "footer":"Zhengyuan Zhou · Panayotis Mertikopoulos · Nicholas Bambos · Stephen Boyd · Peter W Glynn",
      "id":"9470"
   },
   {
      "title":"Accelerated First-order Methods for Geodesically Convex Optimization on Riemannian Manifolds",
      "footer":"Yuanyuan Liu · Fanhua Shang · James Cheng · Hong Cheng · Licheng Jiao",
      "id":"9263"
   },
   {
      "title":"On the Fine-Grained Complexity of Empirical Risk Minimization: Kernel Methods and Neural Networks",
      "footer":"Arturs Backurs · Piotr Indyk · Ludwig Schmidt",
      "id":"9210"
   },
   {
      "title":"Large-Scale Quadratically Constrained Quadratic Program via Low-Discrepancy Sequences",
      "footer":"Kinjal Basu · Ankan Saha · Shaunak Chatterjee",
      "id":"9017"
   },
   {
      "title":"A New Alternating Direction Method for Linear Programming",
      "footer":"Sinong Wang · Ness Shroff",
      "id":"8939"
   },
   {
      "title":"Dykstra's Algorithm, ADMM, and Coordinate Descent: Connections, Insights, and Extensions",
      "footer":"Ryan Tibshirani",
      "id":"8848"
   },
   {
      "title":"Smooth Primal-Dual Coordinate Descent Algorithms for Nonsmooth Convex Optimization",
      "footer":"Ahmet Alacaoglu · Quoc Tran Dinh · Olivier Fercoq · Volkan Cevher",
      "id":"9358"
   },
   {
      "title":"First-Order Adaptive Sample Size Methods to Reduce Complexity of Empirical Risk Minimization",
      "footer":"Aryan Mokhtari · Alejandro Ribeiro",
      "id":"8994"
   },
   {
      "title":"Accelerated consensus via Min-Sum Splitting",
      "footer":"Patrick Rebeschini · Sekhar C Tatikonda",
      "id":"8929"
   },
   {
      "title":"Integration Methods and Optimization Algorithms",
      "footer":"Damien Scieur · Vincent Roulet · Francis Bach · Alexandre d'Aspremont",
      "id":"8904"
   },
   {
      "title":"Efficient Use of Limited-Memory Resources to Accelerate Linear Learning",
      "footer":"Celestine Dünner · Thomas Parnell · Martin Jaggi",
      "id":"9205"
   },
   {
      "title":"A Screening Rule for l1-Regularized Ising Model Estimation",
      "footer":"Zhaobin Kuang · Sinong Geng · David Page",
      "id":"8867"
   },
   {
      "title":"Uprooting and Rerooting Higher-order Graphical Models",
      "footer":"Adrian Weller · Mark Rowland",
      "id":"8818"
   },
   {
      "title":"Concentration of Multilinear Functions of the Ising Model with Applications to Network Data",
      "footer":"Constantinos Daskalakis · Nishanth Dikkala · Gautam Kamath",
      "id":"8799"
   },
   {
      "title":"Inference in Graphical Models via Semidefinite Programming Hierarchies",
      "footer":"Murat A. Erdogdu · Yash Deshpande · Andrea Montanari",
      "id":"8838"
   },
   {
      "title":"Beyond normality: Learning sparse probabilistic graphical models in the non-Gaussian setting",
      "footer":"Rebecca Morrison · Ricardo Baptista · Youssef Marzouk",
      "id":"9023"
   },
   {
      "title":"Dynamic Importance Sampling for Anytime Bounds of the Partition Function",
      "footer":"Qi Lou · Rina Dechter · Alexander Ihler",
      "id":"9104"
   },
   {
      "title":"Nonbacktracking Bounds on the Influence in Independent Cascade Models",
      "footer":"Emmanuel Abbe · Sanjeev Kulkarni · Eun Jee Lee",
      "id":"8932"
   },
   {
      "title":"Rigorous Dynamics and Consistent Estimation in Arbitrarily Conditioned Linear Systems",
      "footer":"Alyson Fletcher · Sundeep Rangan · Mojtaba Sahraee-Ardakan · Philip Schniter",
      "id":"9041"
   },
   {
      "title":"Learning Disentangled Representations with Semi-Supervised Deep Generative Models",
      "footer":"Siddharth Narayanaswamy · T. Brooks Paige · Jan-Willem van de Meent · Alban Desmaison · Frank Wood · Noah Goodman · Pushmeet Kohli · Philip Torr",
      "id":"9365"
   },
   {
      "title":"Gauging Variational Inference",
      "footer":"Sung-Soo Ahn · Michael Chertkov · Jinwoo Shin",
      "id":"9073"
   },
   {
      "title":"Variational Inference via χ Upper Bound Minimization",
      "footer":"Adji Bousso Dieng · Dustin Tran · Rajesh Ranganath · John Paisley · David Blei",
      "id":"9059"
   },
   {
      "title":"Collapsed variational Bayes for Markov jump processes",
      "footer":"Boqian Zhang · Jiangwei Pan · Vinayak A Rao",
      "id":"9157"
   },
   {
      "title":"Bayesian Dyadic Trees and Histograms for Regression",
      "footer":"Stéphanie van der Pas · Veronika Rockova",
      "id":"8997"
   },
   {
      "title":"Differentially private Bayesian learning on distributed data",
      "footer":"Mikko Heikkilä · Eemil Lagerspetz · Samuel Kaski · Kana Shimizu · Sasu Tarkoma · Antti Honkela",
      "id":"9107"
   },
   {
      "title":"Model-Powered Conditional Independence Test",
      "footer":"Rajat Sen · Ananda Theertha Suresh · Karthikeyan Shanmugam · Alexandros Dimakis · Sanjay Shakkottai",
      "id":"9080"
   },
   {
      "title":"When Worlds Collide: Integrating Different Counterfactual Assumptions in Fairness",
      "footer":"Chris Russell · Ricardo Silva · Matt Kusner · Joshua Loftus",
      "id":"9411"
   },
   {
      "title":"Q-LDA: Uncovering Latent Patterns in Text-based Sequential Decision Processes",
      "footer":"Jianshu Chen · Chong Wang · Lin Xiao · Ji He · Lihong Li · Li Deng",
      "id":"9274"
   },
   {
      "title":"Probabilistic Models for Integration Error in the Assessment of Functional Cardiac Models",
      "footer":"Chris Oates · Steven Niederer · Angela Lee · François-Xavier Briol · Mark Girolami",
      "id":"8809"
   },
   {
      "title":"Expectation Propagation for t-Exponential Family Using Q-Algebra",
      "footer":"Futoshi Futami · Issei Sato · Masashi Sugiyama",
      "id":"9012"
   },
   {
      "title":"A Probabilistic Framework for Nonlinearities in Stochastic Neural Networks",
      "footer":"Qinliang Su · xuejun Liao · Lawrence Carin",
      "id":"9226"
   },
   {
      "title":"Clone MCMC: Parallel High-Dimensional Gaussian Gibbs Sampling",
      "footer":"Andrei-Cristian Barbos · Francois Caron · Jean-François Giovannelli · Arnaud Doucet",
      "id":"9278"
   },
   {
      "title":"Learning spatiotemporal piecewise-geodesic trajectories from longitudinal manifold-valued data",
      "footer":"Stéphanie ALLASSONNIERE · Juliette Chevallier",
      "id":"8908"
   },
   {
      "title":"Scalable Levy Process Priors for Spectral Kernel Learning",
      "footer":"Phillip A Jang · Andrew Loeb · Matthew Davidow · Andrew Wilson",
      "id":"9175"
   },
   {
      "title":"Inferring The Latent Structure of Human Decision-Making from Raw Visual Inputs",
      "footer":"Yunzhu Li · Jiaming Song · Stefano Ermon",
      "id":"9163"
   },
   {
      "title":"Hybrid Reward Architecture for Reinforcement Learning",
      "footer":"Harm Van Seijen · Romain Laroche · Mehdi Fatemi · Joshua Romoff",
      "id":"9314"
   },
   {
      "title":"Shallow Updates for Deep Reinforcement Learning",
      "footer":"Nir Levine · Tom Zahavy · Daniel J Mankowitz · Aviv Tamar · Shie Mannor",
      "id":"9098"
   },
   {
      "title":"Towards Generalization and Simplicity in Continuous Control",
      "footer":"Aravind Rajeswaran · Kendall Lowrey · Emanuel Todorov · Sham Kakade",
      "id":"9424"
   },
   {
      "title":"Interpolated Policy Gradient: Merging On-Policy and Off-Policy Gradient Estimation for Deep Reinforcement Learning",
      "footer":"Shixiang Gu · Tim Lillicrap · Richard E Turner · Zoubin Ghahramani · Bernhard Schölkopf · Sergey Levine",
      "id":"9166"
   },
   {
      "title":"Scalable Planning with Tensorflow for Hybrid Nonlinear Domains",
      "footer":"Ga Wu · Buser Say · Scott Sanner",
      "id":"9398"
   },
   {
      "title":"Task-based End-to-end Model Learning in Stochastic Optimization",
      "footer":"Priya Donti · J. Zico Kolter · Brandon Amos",
      "id":"9323"
   },
   {
      "title":"Value Prediction Network",
      "footer":"Junhyuk Oh · Satinder Singh · Honglak Lee",
      "id":"9383"
   },
   {
      "title":"Variable Importance Using Decision Trees",
      "footer":"Arash Amini · Seyed Jalil Kazemitabar · Adam Bloniarz · Ameet S Talwalkar",
      "id":"8839"
   },
   {
      "title":"The Expressive Power of Neural Networks: A View from the Width",
      "footer":"Zhou Lu · Hongming Pu · Feicheng Wang · Zhiqiang Hu · Liwei Wang",
      "id":"9394"
   },
   {
      "title":"SGD Learns the Conjugate Kernel Class of the Network",
      "footer":"Amit Daniely",
      "id":"9029"
   },
   {
      "title":"Radon Machines: Effective Parallelisation for Machine Learning",
      "footer":"Michael Kamp · Mario Boley · Olana Missura · Thomas Gärtner",
      "id":"9417"
   },
   {
      "title":"Noise-Tolerant Interactive Learning Using Pairwise Comparisons",
      "footer":"Yichong Xu · Hongyang Zhang · Aarti Singh · Artur Dubrawski · Kyle Miller",
      "id":"9030"
   },
   {
      "title":"A PAC-Bayesian Analysis of Randomized Learning with Application to Stochastic Gradient Descent",
      "footer":"Ben London",
      "id":"9078"
   },
   {
      "title":"Revisiting Perceptron: Efficient and Label-Optimal Learning of Halfspaces",
      "footer":"Songbai Yan · Chicheng Zhang",
      "id":"8899"
   },
   {
      "title":"Sample and Computationally Efficient Learning Algorithms under S-Concave Distributions",
      "footer":"Maria-Florina Balcan · Hongyang Zhang",
      "id":"9256"
   },
   {
      "title":"Nearest-Neighbor Sample Compression: Efficiency, Consistency, Infinite Dimensions",
      "footer":"Aryeh Kontorovich · Sivan Sabato · Roi Weiss",
      "id":"8948"
   },
   {
      "title":"Learning Identifiable Gaussian Bayesian Networks in Polynomial Time and Sample Complexity",
      "footer":"Asish Ghoshal · Jean Honorio",
      "id":"9415"
   },
   {
      "title":"From which world is your graph",
      "footer":"Cheng Li · Varun Kanade · Felix MF Wong · Zhenming Liu",
      "id":"8938"
   },
   {
      "title":"Mean Field Residual Networks: On the Edge of Chaos",
      "footer":"Ge Yang",
      "id":"9071"
   },
   {
      "title":"Learning from uncertain curves: The 2-Wasserstein metric for Gaussian processes",
      "footer":"Anton Mallasto · Aasa Feragen",
      "id":"9340"
   },
   {
      "title":"On clustering network-valued data",
      "footer":"Soumendu Sundar Mukherjee · Purnamrita Sarkar · Lizhen Lin",
      "id":"9473"
   },
   {
      "title":"On the Power of Truncated SVD for General High-rank Matrix Estimation Problems",
      "footer":"Simon Du · Yining Wang · Aarti Singh",
      "id":"8841"
   },
   {
      "title":"AdaGAN: Boosting Generative Models",
      "footer":"Ilya Tolstikhin · Sylvain Gelly · Olivier Bousquet · Carl-Johann SIMON-GABRIEL · Bernhard Schölkopf",
      "id":"9317"
   },
   {
      "title":"Discovering Potential Influence via Information Bottleneck",
      "footer":"Weihao Gao · Sreeram Kannan · Hyeji Kim · Sewoong Oh · Pramod Viswanath",
      "id":"9235"
   },
   {
      "title":"Phase Transitions in the Pooled Data Problem",
      "footer":"Jonathan Scarlett · Volkan Cevher",
      "id":"8834"
   },
   {
      "title":"Coded Distributed Computing for Inverse Problems",
      "footer":"Yaoqing Yang · Pulkit Grover · Soummya Kar",
      "id":"8866"
   },
   {
      "title":"Query Complexity of Clustering with Side Information",
      "footer":"Arya Mazumdar · Barna Saha",
      "id":"9245"
   },
   {
      "title":"Revisit Fuzzy Neural Network: Demystifying Batch Normalization and ReLU with Generalized Hamming Network",
      "footer":"Lixin Fan",
      "id":"8981"
   },
   {
      "title":"Posterior sampling for reinforcement learning: worst-case regret bounds",
      "footer":"Shipra Agrawal · Randy Jia",
      "id":"8911"
   },
   {
      "title":"A framework for Multi-A(rmed)/B(andit) Testing with Online FDR Control",
      "footer":"Fanny Yang · Aaditya Ramdas · Kevin Jamieson · Martin Wainwright",
      "id":"9368"
   },
   {
      "title":"Monte-Carlo Tree Search by Best Arm Identification",
      "footer":"Emilie Kaufmann · Wouter Koolen",
      "id":"9266"
   },
   {
      "title":"Minimal Exploration in Structured Stochastic Bandits",
      "footer":"Stefan Magureanu · Richard Combes · Alexandre Proutiere",
      "id":"8966"
   },
   {
      "title":"Regret Analysis for Continuous Dueling Bandit",
      "footer":"Wataru Kumagai",
      "id":"8940"
   },
   {
      "title":"Elementary Symmetric Polynomials for Optimal Experimental Design",
      "footer":"Zelda E. Mariet · Suvrit Sra",
      "id":"9002"
   },
   {
      "title":"Online Learning of Linear Dynamical Systems",
      "footer":"Elad Hazan · Karan Singh · Cyril Zhang",
      "id":"9438"
   },
   {
      "title":"Efficient and Flexible Inference for Stochastic Systems",
      "footer":"Stefan Bauer · Djordje Miladinovic · Nico S Gorbach · Joachim M Buhmann",
      "id":"9465"
   },
   {
      "title":"Group Sparse Additive Machine",
      "footer":"Hong Chen · Xiaoqian Wang · Heng Huang",
      "id":"8817"
   },
   {
      "title":"Bregman Divergence for Stochastic Variance Reduction: Saddle-Point and Adversarial Prediction",
      "footer":"Zhan Shi · Xinhua Zhang · Yaoliang Yu",
      "id":"9375"
   },
   {
      "title":"Online multiclass boosting",
      "footer":"Young Hun Jung · Jack Goetz · Ambuj Tewari",
      "id":"8886"
   },
   {
      "title":"Universal consistency and minimax rates for online Mondrian Forest",
      "footer":"Jaouad Mourtada · Stéphane Gaïffas · Erwan Scornet",
      "id":"9158"
   },
   {
      "title":"Mean teachers are better role models: Weight-averaged consistency targets improve semi-supervised deep learning results",
      "footer":"Antti Tarvainen · Harri Valpola",
      "id":"8912"
   },
   {
      "title":"Learning from Complementary Labels",
      "footer":"Takashi Ishida · Gang Niu · Weihua Hu · Masashi Sugiyama",
      "id":"9338"
   },
   {
      "title":"Positive-Unlabeled Learning with Non-Negative Risk Estimator",
      "footer":"Ryuichi Kiryo · Gang Niu · Marthinus C du Plessis · Masashi Sugiyama",
      "id":"8958"
   },
   {
      "title":"Semisupervised Clustering, AND-Queries and Locally Encodable Source Coding",
      "footer":"Arya Mazumdar · Soumyabrata Pal",
      "id":"9418"
   },
   {
      "title":"On Learning Errors of Structured Prediction with Approximate Inference",
      "footer":"Yuanbin Wu",
      "id":"9384"
   },
   {
      "title":"On Optimal Generalizability in Parametric Learning",
      "footer":"Ahmad Beirami · Meisam Razaviyayn · Shahin Shahrampour · Vahid Tarokh",
      "id":"9129"
   },
   {
      "title":"Multi-Objective Non-parametric Sequential Prediction",
      "footer":"Guy Uziel · Ran El-Yaniv",
      "id":"9121"
   },
   {
      "title":"Fixed-Rank Approximation of a Positive-Semidefinite Matrix from Streaming Data",
      "footer":"Joel A Tropp · Alp Yurtsever · Madeleine Udell · Volkan Cevher",
      "id":"8915"
   },
   {
      "title":"Communication-Efficient Stochastic Gradient Descent, with Applications to Neural Networks",
      "footer":"Dan Alistarh · Demjan Grubic · Jerry Li · Ryota Tomioka · Milan Vojnovic",
      "id":"8961"
   },
   {
      "title":"Machine Learning with Adversaries: Byzantine Tolerant Gradient Descent",
      "footer":"Peva Blanchard · El Mahdi El Mhamdi · Rachid Guerraoui · Julien Stainer",
      "id":"8810"
   },
   {
      "title":"Ranking Data with Continuous Labels through Oriented Recursive Partitions",
      "footer":"Stéphan Clémençon · Mastane Achab",
      "id":"9237"
   },
   {
      "title":"Practical Data-Dependent Metric Compression with Provable Guarantees",
      "footer":"Piotr Indyk · Ilya Razenshteyn · Tal Wagner",
      "id":"9048"
   },
   {
      "title":"Simple strategies for recovering inner products from coarsely quantized random projections",
      "footer":"Ping Li · Martin Slawski",
      "id":"9234"
   },
   {
      "title":"Clustering Stable Instances of Euclidean k-means.",
      "footer":"Aravindan Vijayaraghavan · Abhratanu Dutta · Alex Wang",
      "id":"9419"
   },
   {
      "title":"On Distributed Hierarchical Clustering",
      "footer":"Mahsa Derakhshan · Soheil Behnezhad · Mohammadhossein Bateni · Vahab Mirrokni · MohammadTaghi Hajiaghayi · Silvio Lattanzi · Raimondas Kiveris",
      "id":"9453"
   },
   {
      "title":"Sparse k-Means Embedding",
      "footer":"Weiwei Liu · Xiaobo Shen · Ivor Tsang",
      "id":"9116"
   },
   {
      "title":"K-Medoids For K-Means Seeding",
      "footer":"James Newling · François Fleuret",
      "id":"9295"
   },
   {
      "title":"An Applied Algorithmic Foundation for Hierarchical Clustering",
      "footer":"Joshua Wang · Benjamin Moseley",
      "id":"9094"
   },
   {
      "title":"Inhomogoenous Hypergraph Clustering with Applications",
      "footer":"Pan Li · Olgica Milenkovic",
      "id":"9018"
   },
   {
      "title":"Subspace Clustering via Tangent Cones",
      "footer":"Amin Jalali · Rebecca Willett",
      "id":"9442"
   },
   {
      "title":"Tensor Biclustering",
      "footer":"Soheil Feizi · Hamid Javadi · David Tse",
      "id":"8923"
   },
   {
      "title":"A unified approach to interpreting model predictions",
      "footer":"Scott M Lundberg · Su-In Lee",
      "id":"9253"
   },
   {
      "title":"Efficient Sublinear-Regret Algorithms for Online Sparse Linear Regression",
      "footer":"Shinji Ito · Akihiro Yabe · Ken-Ichi Kawarabayashi · Naonori Kakimura · Takuro Fukunaga · Daisuke Hatano · Hanna Sumita",
      "id":"9190"
   },
   {
      "title":"Unbiased estimates for linear regression via volume sampling",
      "footer":"Michal Derezinski · Manfred Warmuth",
      "id":"9093"
   },
   {
      "title":"On Separability of Loss Functions, and Revisiting Discriminative Vs Generative Models",
      "footer":"Adarsh Prasad · Pradeep Ravikumar",
      "id":"9471"
   },
   {
      "title":"Generalized Linear Model Regression under Distance-to-set Penalties",
      "footer":"Jason Xu · Eric Chi · Kenneth Lange",
      "id":"8930"
   },
   {
      "title":"Group Additive Structure Identification for Kernel Nonparametric Regression",
      "footer":"Chao Pan · Michael Zhu",
      "id":"9267"
   },
   {
      "title":"Learning Overcomplete HMMs",
      "footer":"Vatsal Sharan · Sham Kakade · Percy Liang · Gregory Valiant",
      "id":"8888"
   },
   {
      "title":"Matrix Norm Estimation from a Few Entries",
      "footer":"Sewoong Oh · Ashish Khetan",
      "id":"9412"
   },
   {
      "title":"Optimal Shrinkage of Singular Values Under Random Data Contamination",
      "footer":"Danny Barash · Matan Gavish",
      "id":"9387"
   },
   {
      "title":"A New Theory for Nonconvex Matrix Completion",
      "footer":"Guangcan Liu · Xiaotong Yuan · Qingshan Liu",
      "id":"8873"
   },
   {
      "title":"Learning Low-Dimensional Metrics",
      "footer":"Blake Mason · Lalit Jain · Robert Nowak",
      "id":"9194"
   },
   {
      "title":"Fast Alternating Minimization Algorithms for Dictionary Learning",
      "footer":"Niladri Chatterji · Peter Bartlett",
      "id":"8988"
   },
   {
      "title":"Consistent Robust Regression",
      "footer":"Kush Bhatia · Prateek Jain · Purushottam Kar",
      "id":"8999"
   },
   {
      "title":"Partial Hard Thresholding: A Towards Unified Analysis of Support Recovery",
      "footer":"Jie Shen · Ping Li",
      "id":"9097"
   },
   {
      "title":"Minimax Estimation of Bandable Precision Matrices",
      "footer":"Addison Hu · Sahand Negahban",
      "id":"9265"
   },
   {
      "title":"Diffusion Approximations for Online Principal Component Estimation and Global Convergence",
      "footer":"Chris Junchi Li · Mengdi Wang · Tong Zhang",
      "id":"8860"
   },
   {
      "title":"Estimation of the covariance structure of heavy-tailed distributions",
      "footer":"Xiaohan Wei · Stanislav Minsker",
      "id":"9070"
   },
   {
      "title":"Learning Koopman Invariant Subspaces for Dynamic Mode Decomposition",
      "footer":"Naoya Takeishi · Yoshinobu Kawahara · Takehisa Yairi",
      "id":"8906"
   },
   {
      "title":"Stochastic Approximation for Canonical Correlation Analysis",
      "footer":"Raman Arora · Teodor Vanislavov Marinov · Poorya Mianjy",
      "id":"9254"
   },
   {
      "title":"Diving into the shallows: a computational perspective on large-scale shallow learning",
      "footer":"SIYUAN MA · Mikhail Belkin",
      "id":"9160"
   },
   {
      "title":"The Unreasonable Effectiveness of Structured Random Orthogonal Embeddings",
      "footer":"Krzysztof M Choromanski · Mark Rowland · Adrian Weller",
      "id":"8819"
   },
   {
      "title":"Generalization Properties of Learning with Random Features",
      "footer":"Alessandro Rudi · Lorenzo Rosasco",
      "id":"9106"
   },
   {
      "title":"Gaussian Quadrature for Kernel Features",
      "footer":"Tri Dao · Christopher M De Sa · Christopher Ré",
      "id":"9382"
   },
   {
      "title":"A Linear-Time Kernel Goodness-of-Fit Test",
      "footer":"Wittawat Jitkrittum · Wenkai Xu · Zoltan Szabo · Kenji Fukumizu · Arthur Gretton",
      "id":"8823"
   },
   {
      "title":"Convergence rates of a partition based Bayesian multivariate density estimation method",
      "footer":"Linxi Liu · Dangna Li · Wing Hung Wong",
      "id":"9250"
   },
   {
      "title":"The power of absolute discounting: all-dimensional distribution estimation",
      "footer":"Moein Falahatgar · Mesrob Ohannessian · Alon Orlitsky · Venkatadheeraj Pichapati",
      "id":"9434"
   },
   {
      "title":"Optimally Learning Populations of Parameters",
      "footer":"Kevin Tian · Weihao Kong · Gregory Valiant",
      "id":"9351"
   },
   {
      "title":"Communication-Efficient Distributed Learning of Discrete Distributions",
      "footer":"Ilias Diakonikolas · Elena Grigorescu · Jerry Li · Abhiram Natarajan · Krzysztof Onak · Ludwig Schmidt",
      "id":"9409"
   },
   {
      "title":"Improved Dynamic Regret for Non-degeneracy Functions",
      "footer":"Lijun Zhang · Tianbao Yang · Jinfeng Yi · Rong Jin · Zhi-Hua Zhou",
      "id":"8868"
   },
   {
      "title":"Parameter-Free Online Learning via Model Selection",
      "footer":"Dylan J Foster · Satyen Kale · Mehryar Mohri · Karthik Sridharan",
      "id":"9374"
   },
   {
      "title":"Fast Rates for Bandit Optimization with Upper-Confidence Frank-Wolfe",
      "footer":"Quentin Berthet · Vianney Perchet",
      "id":"9010"
   },
   {
      "title":"Online Learning with Transductive Regret",
      "footer":"Scott Yang · Mehryar Mohri",
      "id":"9297"
   },
   {
      "title":"Multi-Armed Bandits with Metric Movement Costs",
      "footer":"Tomer Koren · Roi Livni · Yishay Mansour",
      "id":"9192"
   },
   {
      "title":"Differentially Private Empirical Risk Minimization Revisited: Faster and More General",
      "footer":"Di Wang · Minwei Ye · Jinhui Xu",
      "id":"9058"
   },
   {
      "title":"Certified Defenses for Data Poisoning Attacks",
      "footer":"Jacob Steinhardt · Pang Wei W Koh · Percy Liang",
      "id":"9135"
   },
   {
      "title":"Sparse Approximate Conic Hulls",
      "footer":"Greg Van Buskirk · Ben Raichel · Nicholas Ruozzi",
      "id":"9040"
   },
   {
      "title":"On Tensor Train Rank Minimization : Statistical Efficiency and Scalable Algorithm",
      "footer":"Masaaki Imaizumi · Takanori Maehara · Kohei Hayashi",
      "id":"9174"
   },
   {
      "title":"Sparse convolutional coding for neuronal assembly detection",
      "footer":"Sven Peter · Elke Kirschbaum · Martin Both · Intramural Lee Campbell · Intramural Brandon Harvey · Intramural Conor Heins · Daniel Durstewitz · Ferran Diego · Fred Hamprecht",
      "id":"9150"
   },
   {
      "title":"Estimating High-dimensional Non-Gaussian Multiple Index Models via Stein’s Lemma",
      "footer":"Zhuoran Yang · krishnakumar balasubramanian · Princeton Zhaoran Wang · Han Liu",
      "id":"9381"
   },
   {
      "title":"Solid Harmonic Wavelet Scattering: Predicting Quantum Molecular Energy from Invariant Descriptors of 3D Electronic Densities",
      "footer":"Michael Eickenberg · Georgios Exarchakis · Matthew Hirn · Stephane Mallat",
      "id":"9423"
   },
   {
      "title":"Clustering Billions of Reads for DNA Data Storage",
      "footer":"Cyrus Rashtchian · Konstantin Makarychev · Luis Ceze · Karin Strauss · Sergey Yekhanin · Djordje Jevdjic · Miklos Racz · Siena Ang",
      "id":"9120"
   },
   {
      "title":"Deep Recurrent Neural Network-Based Identification of Precursor microRNAs",
      "footer":"Seunghyun Park · Seonwoo Min · Hyun-Soo Choi · Sungroh Yoon",
      "id":"9074"
   },
   {
      "title":"Decoding with Value Networks for Neural Machine Translation",
      "footer":"Di He · Hanqing Lu · Yingce Xia · Tao Qin · Liwei Wang · Tieyan Liu",
      "id":"8815"
   },
   {
      "title":"Towards the ImageNet-CNN of NLP: Pretraining Sentence Encoders with Machine Translation",
      "footer":"Bryan McCann · James Bradbury · Caiming Xiong · Richard Socher",
      "id":"9400"
   },
   {
      "title":"Deep Voice 2: Multi-Speaker Neural Text-to-Speech",
      "footer":"Andrew Gibiansky",
      "id":"9081"
   },
   {
      "title":"Modulating early visual processing by language",
      "footer":"Harm de Vries · Florian Strub · Jeremie Mary · Hugo Larochelle · Olivier Pietquin · Aaron C Courville",
      "id":"9428"
   },
   {
      "title":"Multimodal Learning and Reasoning for Visual Question Answering",
      "footer":"Ilija Ilievski · Jiashi Feng",
      "id":"8851"
   },
   {
      "title":"Learning to Model the Tail",
      "footer":"Yu-Xiong Wang · Deva Ramanan · Martial Hebert",
      "id":"9469"
   },
   {
      "title":"Interpretable and Globally Optimal Prediction for Textual Grounding using Image Concepts",
      "footer":"Raymond Yeh · Jinjun Xiong · Wen-Mei Hwu · Minh Do · Alexander Schwing",
      "id":"8980"
   },
   {
      "title":"Multiscale Quantization for Fast Similarity Search",
      "footer":"Xiang Wu · Ruiqi Guo · Ananda Theertha Suresh · Daniel Holtmann-Rice · David Simcha · Felix Yu · Sanjiv Kumar",
      "id":"9348"
   },
   {
      "title":"MaskRNN: Instance Level Video Object Segmentation",
      "footer":"Yuan-Ting Hu · Jia-Bin Huang · Alexander Schwing",
      "id":"8829"
   },
   {
      "title":"Flat2Sphere: Learning Spherical Convolution for Fast Features from 360° Imagery",
      "footer":"Yu-Chuan Su · Kristen Grauman",
      "id":"8849"
   },
   {
      "title":"Deep Mean-Shift Priors for Image Restoration",
      "footer":"Siavash Arjomand Bigdeli · Matthias Zwicker · Paolo Favaro · Meiguang Jin",
      "id":"8871"
   },
   {
      "title":"Pixels to Graphs by Associative Embedding",
      "footer":"Alejandro Newell · Jia Deng",
      "id":"9005"
   },
   {
      "title":"3D Shape Reconstruction by Modeling 2.5D Sketch",
      "footer":"Jiajun Wu · Yifan Wang · Tianfan Xue · Xingyuan Sun · Bill Freeman · Josh Tenenbaum",
      "id":"8850"
   },
   {
      "title":"Temporal Coherency based Criteria for Predicting Video Frames using Deep Multi-stage Generative Adversarial Networks",
      "footer":"Prateep Bhattacharjee · Sukhendu Das",
      "id":"9206"
   },
   {
      "title":"Learning to Generalize Intrinsic Images with a Structured Disentangling Autoencoder",
      "footer":"Michael Janner · Jiajun Wu · Tejas Kulkarni · Ilker Yildirim · Josh Tenenbaum",
      "id":"9366"
   },
   {
      "title":"Unsupervised object learning from dense equivariant image labelling",
      "footer":"James Thewlis · Andrea Vedaldi · Hakan Bilen",
      "id":"8879"
   },
   {
      "title":"One-Sided Unsupervised Domain Mapping",
      "footer":"Sagie Benaim · Lior Wolf",
      "id":"8870"
   },
   {
      "title":"Contrastive Learning for Image Captioning",
      "footer":"Bo Dai · Dahua Lin",
      "id":"8884"
   },
   {
      "title":"Dynamic Routing Between Capsules",
      "footer":"Sara Sabour · Nicholas Frosst · Geoffrey E Hinton",
      "id":"9167"
   },
   {
      "title":"What Uncertainties Do We Need in Bayesian Deep Learning for Computer Vision?",
      "footer":"Alex Kendall · Yarin Gal",
      "id":"9332"
   },
   {
      "title":"Efficient Optimization for Linear Dynamical Systems with Applications to Clustering and Sparse Coding",
      "footer":"Wenbing Huang · Fuchun Sun · Tong Zhang · Junzhou Huang · Mehrtash Harandi",
      "id":"9128"
   },
   {
      "title":"Label Distribution Learning Forests",
      "footer":"Wei Shen · KAI ZHAO · Yilu Guo · Alan Yuille",
      "id":"8878"
   },
   {
      "title":"Graph Matching via Multiplicative Update Algorithm",
      "footer":"Bo Jiang · Jin Tang · Bin Luo",
      "id":"9103"
   },
   {
      "title":"Training Quantized Nets: A Deeper Understanding",
      "footer":"Hao Li · Soham De · Zheng Xu · Christoph Studer · Hanan Samet · Tom Goldstein",
      "id":"9354"
   },
   {
      "title":"Inner-loop free ADMM using Auxiliary Deep Neural Networks",
      "footer":"Kai Fan · Qi Wei · Katherine A Heller",
      "id":"9024"
   },
   {
      "title":"Towards Accurate Binary Convolutional Neural Network",
      "footer":"Wei Pan · Xiaofan Lin · Cong Zhao",
      "id":"8831"
   },
   {
      "title":"Runtime Neural Pruning",
      "footer":"Ji Lin · Yongming Rao · Jiwen Lu",
      "id":"9006"
   },
   {
      "title":"Structured Embedding Models for Grouped Data",
      "footer":"Maja Rudolph · Francisco Ruiz · David Blei",
      "id":"8822"
   },
   {
      "title":"Poincaré Embeddings for Learning Hierarchical Representations",
      "footer":"Maximillian Nickel · Douwe Kiela",
      "id":"9404"
   },
   {
      "title":"Language modeling with recurrent highway hypernetworks",
      "footer":"Joseph Suarez",
      "id":"9111"
   },
   {
      "title":"Preventing Gradient Explosions in Gated Recurrent Units",
      "footer":"Sekitoshi Kanai · Yasuhiro Fujiwara · Sotetsu Iwamura",
      "id":"8840"
   },
   {
      "title":"Wider and Deeper, Cheaper and Faster: Tensorized LSTMs for Sequence Learning",
      "footer":"Zhen He · Shaobing Gao · Liang Xiao · David Barber",
      "id":"8798"
   },
   {
      "title":"Fast-Slow Recurrent Neural Networks",
      "footer":"Asier Mujika · Florian Meier · Angelika Steger",
      "id":"9364"
   },
   {
      "title":"Cold-Start Reinforcement Learning with Softmax Policy Gradients",
      "footer":"Nan Ding · Radu Soricut",
      "id":"9067"
   },
   {
      "title":"Deep Learning for Precipitation Nowcasting: A Benchmark and A New Model",
      "footer":"Xingjian Shi · Hao Wang · Zhihan Gao · Leonard Lausen · Dit-Yan Yeung · Wang-chun WOO · Wai-kin Wong",
      "id":"9336"
   },
   {
      "title":"Recurrent Ladder Networks",
      "footer":"Isabeau Prémont-Schwarz · Alexander Ilin · Tele Hao · Antti Rasmus · Rinu Boney · Harri Valpola",
      "id":"9373"
   },
   {
      "title":"Predictive-State Decoders: Encoding the Future into Recurrent Networks",
      "footer":"Arun Venkatraman · Nicholas Rhinehart · Wen Sun · Lerrel Pinto · Martial Hebert · Byron Boots · Kris Kitani · J. Bagnell",
      "id":"8910"
   },
   {
      "title":"QMDP-Net: Deep Learning for Planning under Partial Observability",
      "footer":"Peter Karkus · David Hsu · Wee Sun Lee",
      "id":"9246"
   },
   {
      "title":"Filtering Variational Objectives",
      "footer":"Chris Maddison · John Lawson · George Tucker · Mohammad Norouzi · Nicolas Heess · Andriy Mnih · Yee Teh · Arnaud Doucet",
      "id":"9426"
   },
   {
      "title":"Unsupervised Learning of Disentangled Latent Representations from Sequential Data",
      "footer":"Wei-Ning Hsu · Yu Zhang · James Glass",
      "id":"8977"
   },
   {
      "title":"Neural Discrete Representation Learning",
      "footer":"Aaron van den Oord · Oriol Vinyals · koray kavukcuoglu",
      "id":"9401"
   },
   {
      "title":"Variational Memory Addressing in Generative Models",
      "footer":"Jörg Bornschein · Andriy Mnih · Daniel Zoran · Danilo Jimenez Rezende",
      "id":"9173"
   },
   {
      "title":"Cortical microcircuits as gated-recurrent neural networks",
      "footer":"Rui Costa · Ioannis Alexandros Assael · Brendan Shillingford · Nando de Freitas · TIm Vogels",
      "id":"8824"
   },
   {
      "title":"Continual Learning with Deep Generative Replay",
      "footer":"Hanul Shin · Jung Kwon Lee · Jaehong Kim · Jiwon Kim",
      "id":"9084"
   },
   {
      "title":"Hierarchical Attentive Recurrent Tracking",
      "footer":"Adam Kosiorek · Alex Bewley · Ingmar Posner",
      "id":"9090"
   },
   {
      "title":"VAE Learning via Stein Variational Gradient Descent",
      "footer":"Yuchen Pu · Zhe Gan · Ricardo Henao · Chunyuan Li · Shaobo Han · Lawrence Carin",
      "id":"9203"
   },
   {
      "title":"Learning to Inpaint for Image Compression",
      "footer":"Mohammad Haris Baig · Vladlen Koltun · Lorenzo Torresani",
      "id":"8917"
   },
   {
      "title":"Visual Interaction Networks",
      "footer":"Nicholas Watters · Daniel Zoran · Theophane Weber · Peter Battaglia · Razvan Pascanu · Andrea Tacchetti",
      "id":"9231"
   },
   {
      "title":"NeuralFDR: Learning Discovery Thresholds from Hypothesis Features",
      "footer":"Martin J Zhang · Fei Xia · James Zou · David Tse",
      "id":"8945"
   },
   {
      "title":"Eigen-Distortions of Hierarchical Representations",
      "footer":"Alexander Berardino · Valero Laparra · Johannes Ballé · Eero Simoncelli",
      "id":"9136"
   },
   {
      "title":"On-the-fly Operation Batching in Dynamic Computation Graphs",
      "footer":"Graham Neubig · Yoav Goldberg · Chris Dyer",
      "id":"9178"
   },
   {
      "title":"Learning Affinity via Spatial Propagation Networks",
      "footer":"Sifei Liu · Guangyu Zhong · Ming-Hsuan Yang · Shalini De Mello · Jan Kautz · Jinwei Gu",
      "id":"8943"
   },
   {
      "title":"Supervised Adversarial Domain Adaptation",
      "footer":"Saeid Motiian · Quinn Jones · Gianfranco Doretto",
      "id":"9435"
   },
   {
      "title":"Deep Hyperspherical Learning",
      "footer":"Weiyang Liu · Yan-Ming Zhang · Xingguo Li · Zhiding Yu · Bo Dai · Tuo Zhao · Le Song",
      "id":"9176"
   },
   {
      "title":"Riemannian approach to batch normalization",
      "footer":"Minhyung Cho · Jaehyung Lee",
      "id":"9298"
   },
   {
      "title":"Backprop without Learning Rates Through Coin Betting",
      "footer":"Francesco Orabona · Tatiana Tommasi",
      "id":"9004"
   },
   {
      "title":"On the Convergence of Block Coordinate Descent in Training DNNs with Tikhonov Regularization",
      "footer":"Ziming Zhang · Matthew Brand",
      "id":"8962"
   },
   {
      "title":"Collaborative Deep Learning in Fixed Topology Networks",
      "footer":"Zhanhong Jiang · Aditya Balu · Chinmay Hegde · Soumik Sarkar",
      "id":"9363"
   },
   {
      "title":"How regularization affects the critical points in linear networks",
      "footer":"Amirhossein Taghvaei · Jin W Kim · Prashant Mehta",
      "id":"9037"
   },
   {
      "title":"Predicting Organic Reaction Outcomes with Weisfeiler-Lehman Network",
      "footer":"Wengong Jin · Connor Coley · Regina Barzilay · Tommi Jaakkola",
      "id":"9047"
   },
   {
      "title":"Predicting Scene Parsing and Motion Dynamics in the Future",
      "footer":"Xiaojie Jin · Jiashi Feng · Huaxin Xiao · Yunpeng Chen · Shuicheng Yan · Xiaohui Shen · Jimei Yang · Zequn Jie · Li Ping",
      "id":"9458"
   },
   {
      "title":"Houdini: Democratizing Adversarial Examples",
      "footer":"Moustapha Cisse · Yossi Adi · Natalia Neverova · Joseph Keshet",
      "id":"9464"
   },
   {
      "title":"Geometric Matrix Completion with Recurrent Multi-Graph Neural Networks",
      "footer":"Federico Monti · Michael Bronstein · Xavier Bresson",
      "id":"9152"
   },
   {
      "title":"Compression-aware Training of Deep Neural Networks",
      "footer":"Jose Alvarez · Mathieu Salzmann",
      "id":"8880"
   },
   {
      "title":"Non-parametric Neural Networks",
      "footer":"Andreas Lehrmann · Leonid Sigal",
      "id":"9201"
   },
   {
      "title":"GibbsNet: Iterative Adversarial Inference for Deep Graphical Models",
      "footer":"Alex Lamb · Devon Hjelm · Yaroslav Ganin · Joseph Paul Cohen · Aaron C Courville · Yoshua Bengio",
      "id":"9285"
   },
   {
      "title":"Exploring Generalization in Deep Learning",
      "footer":"Behnam Neyshabur · Srinadh Bhojanapalli · Nati Srebro",
      "id":"9367"
   },
   {
      "title":"Regularizing Deep Neural Networks by Noise: Its Interpretation and Optimization",
      "footer":"Hyeonwoo Noh · Tackgeun You · Jonghwan Mun · Bohyung Han",
      "id":"9287"
   },
   {
      "title":"Extracting low-dimensional dynamics from multiple large-scale neural population recordings by learning to predict correlations",
      "footer":"Marcel Nonnenmacher · Srinivas C Turaga · Jakob H Macke",
      "id":"9344"
   },
   {
      "title":"Adaptive sampling for a population of neurons",
      "footer":"Benjamin Cowley · Ryan Williamson · Katerina Clemens · Matthew Smith · Byron M Yu",
      "id":"8931"
   },
   {
      "title":"OnACID: Online Analysis of Calcium Imaging Data in Real Time",
      "footer":"Andrea Giovannucci · Johannes Friedrich · Matt Kaufman · Anne Churchland · Dmitri Chklovskii · Liam Paninski · Eftychios Pnevmatikakis",
      "id":"9025"
   },
   {
      "title":"Detrended Partial Cross Correlation for Brain Connectivity Analysis",
      "footer":"Jaime Ide · Fábio Cappabianco · Fabio Faria · Chiang-shan R Li",
      "id":"8883"
   },
   {
      "title":"Practical Bayesian Optimization for Model Fitting with Bayesian Adaptive Direct Search",
      "footer":"Luigi Acerbi · Wei Ji",
      "id":"8973"
   },
   {
      "title":"An Error Detection and Correction Framework for Connectomics",
      "footer":"Jonathan Zung · Ignacio Tartavull",
      "id":"9449"
   },
   {
      "title":"GP CaKe: Effective brain connectivity with causal kernels",
      "footer":"Luca Ambrogioni · Max Hinne · Marcel Van Gerven · Eric Maris",
      "id":"8889"
   },
   {
      "title":"Learning Neural Representations of Human Cognition across Many fMRI Studies",
      "footer":"Arthur Mensch · Julien Mairal · Danilo Bzdok · Bertrand Thirion · Gael Varoquaux",
      "id":"9361"
   },
   {
      "title":"Mapping distinct timescales of functional interactions among brain networks",
      "footer":"Mali Sundaresan · Arshed Nabeel · Devarajan Sridharan",
      "id":"9191"
   },
   {
      "title":"Robust Estimation of Neural Signals in Calcium Imaging",
      "footer":"Hakan Inan · Murat A. Erdogdu · Mark Schnitzer",
      "id":"9075"
   },
   {
      "title":"Learning the Morphology of Brain Signals Using Alpha-Stable Convolutional Sparse Coding",
      "footer":"Mainak Jas · Tom Dupré la Tour · Umut Simsekli · Alexandre Gramfort",
      "id":"8903"
   },
   {
      "title":"Streaming Weak Submodularity: Interpreting Neural Networks on the Fly",
      "footer":"Ethan Elenberg · Alexandros Dimakis · Moran Feldman · Amin Karbasi",
      "id":"9185"
   },
   {
      "title":"Decomposable Submodular Function Minimization: Discrete and Continuous",
      "footer":"Alina Ene · Huy Nguyen · Laszlo Vegh",
      "id":"9072"
   },
   {
      "title":"Differentiable Learning of Submodular Functions",
      "footer":"Josip Djolonga · Andreas Krause",
      "id":"8895"
   },
   {
      "title":"Robust Optimization for Non-Convex Objectives",
      "footer":"Yaron Singer · Robert S Chen · Vasilis Syrgkanis · Brendan Lucier",
      "id":"9247"
   },
   {
      "title":"On the Optimization Landscape of Tensor Decompositions",
      "footer":"Rong Ge · Tengyu Ma",
      "id":"9148"
   },
   {
      "title":"Gradient Descent Can Take Exponential Time to Escape Saddle Points",
      "footer":"Simon Du · Chi Jin · Jason D Lee · Michael Jordan · Aarti Singh · Barnabas Poczos",
      "id":"8900"
   },
   {
      "title":"Convolutional Phase Retrieval",
      "footer":"Qing Qu · Yuqian Zhang · Yonina Eldar · John Wright",
      "id":"9380"
   },
   {
      "title":"Implicit Regularization in Matrix Factorization",
      "footer":"Suriya Gunasekar · Blake Woodworth · Srinadh Bhojanapalli · Behnam Neyshabur · Nati Srebro",
      "id":"9386"
   },
   {
      "title":"Near-linear time approximation algorithms for optimal transport via Sinkhorn iteration",
      "footer":"Jason Altschuler · Jonathan Weed · Philippe Rigollet",
      "id":"8985"
   },
   {
      "title":"On Frank-Wolfe and Equilibrium Computation",
      "footer":"Jacob D Abernethy · Jun-Kun Wang",
      "id":"9427"
   },
   {
      "title":"Greedy Algorithms for Cone Constrained Optimization with Convergence Guarantees",
      "footer":"Francesco Locatello · Michael Tschannen · Gunnar Raetsch · Martin Jaggi",
      "id":"8872"
   },
   {
      "title":"When Cyclic Coordinate Descent Beats Randomized Coordinate Descent",
      "footer":"Mert Gurbuzbalaban · Nuri Vanli · Asuman Ozdaglar",
      "id":"9466"
   },
   {
      "title":"Linear Convergence of a Frank-Wolfe Type Algorithm over Trace-Norm Balls",
      "footer":"Zeyuan Allen-Zhu · Elad Hazan · Wei Hu · Yuanzhi Li",
      "id":"9390"
   },
   {
      "title":"Adaptive Accelerated Gradient Converging Method under H\\\"{o}lderian Error Bound Condition",
      "footer":"Mingrui Liu · Tianbao Yang",
      "id":"9095"
   },
   {
      "title":"Searching in the Dark: Practical SVRG Methods under Error Bound Conditions with Guarantee",
      "footer":"Yi Xu · Qihang Lin · Tianbao Yang",
      "id":"9112"
   },
   {
      "title":"Geometric Descent Method for Convex Composite Minimization",
      "footer":"Shixiang Chen · Shiqian Ma · Wei Liu",
      "id":"8859"
   },
   {
      "title":"Faster and Non-ergodic O(1/K) Stochastic Alternating Direction Method of Multipliers",
      "footer":"Cong Fang · Feng Cheng · Zhouchen Lin",
      "id":"9225"
   },
   {
      "title":"Doubly Accelerated Stochastic Variance Reduced Dual Averaging Method for Regularized Empirical Risk Minimization",
      "footer":"Tomoya Murata · Taiji Suzuki",
      "id":"8856"
   },
   {
      "title":"Limitations on Variance-Reduction and Acceleration Schemes for Finite Sums Optimization",
      "footer":"Yossi Arjevani",
      "id":"9137"
   },
   {
      "title":"Nonlinear Acceleration of Stochastic Algorithms",
      "footer":"Damien Scieur · Francis Bach · Alexandre d'Aspremont",
      "id":"9179"
   },
   {
      "title":"Acceleration and Averaging in Stochastic Descent Dynamics",
      "footer":"Walid Krichene",
      "id":"9447"
   },
   {
      "title":"Multiscale Semi-Markov Dynamics for Intracortical Brain-Computer Interfaces",
      "footer":"Daniel Milstein · Jason Pacheco · Leigh Hochberg · John D Simeral · Beata Jarosiewicz · Erik Sudderth",
      "id":"8881"
   },
   {
      "title":"EEG-GRAPH: A Factor Graph Based Model for Capturing Spatial, Temporal, and Observational Relationships in Electroencephalograms",
      "footer":"Yogatheesan Varatharajah · Min Jin Chong · Krishnakant Saboo · Brent Berry · Benjamin Brinkmann · Gregory Worrell · Ravishankar Iyer",
      "id":"9312"
   },
   {
      "title":"Asynchronous Parallel Coordinate Minimization for MAP Inference",
      "footer":"Ofer Meshi · Alexander Schwing",
      "id":"9347"
   },
   {
      "title":"Speeding Up Latent Variable Gaussian Graphical Model Estimation via Nonconvex Optimization",
      "footer":"Pan Xu · Jian Ma · Quanquan Gu",
      "id":"8982"
   },
   {
      "title":"The Expxorcist: Nonparametric Graphical Models Via Conditional Exponential Densities",
      "footer":"Arun Suggala · Mladen Kolar · Pradeep Ravikumar",
      "id":"9222"
   },
   {
      "title":"Reducing Reparameterization Gradient Variance",
      "footer":"Andrew Miller · Nick Foti · Alexander D'Amour · Ryan Adams",
      "id":"9153"
   },
   {
      "title":"Robust Conditional Probabilities",
      "footer":"Yoav Wald · Amir Globerson",
      "id":"9406"
   },
   {
      "title":"Stein Variational Gradient Descent as Gradient Flow",
      "footer":"Qiang Liu",
      "id":"9096"
   },
   {
      "title":"Parallel Streaming Wasserstein Barycenters",
      "footer":"Matthew Staib · Sebastian Claici · Justin M Solomon · Stefanie Jegelka",
      "id":"9051"
   },
   {
      "title":"AIDE: An algorithm for measuring the accuracy of probabilistic inference algorithms",
      "footer":"Marco Cusumano-Towner · Vikash K Mansinghka",
      "id":"9085"
   },
   {
      "title":"Deep Dynamic Poisson Factorization Model",
      "footer":"Chengyue Gong · win-bin huang",
      "id":"8957"
   },
   {
      "title":"On the Model Shrinkage Effect of Gamma Process Edge Partition Models",
      "footer":"Iku Ohama · Issei Sato · Takuya Kida · Hiroki Arimura",
      "id":"8836"
   },
   {
      "title":"Model evidence from nonequilibrium simulations",
      "footer":"Michael Habeck",
      "id":"8965"
   },
   {
      "title":"A-NICE-MC: Adversarial Training for MCMC",
      "footer":"Jiaming Song · Shengjia Zhao · Stefano Ermon",
      "id":"9290"
   },
   {
      "title":"Identification of Gaussian Process State Space Models",
      "footer":"Stefanos Eleftheriadis · Tom Nicholson · Marc Deisenroth · James Hensman",
      "id":"9306"
   },
   {
      "title":"Streaming Sparse Gaussian Process Approximations",
      "footer":"Thang D Bui · Cuong Nguyen · Richard E Turner",
      "id":"9114"
   },
   {
      "title":"Bayesian Optimization with Gradients",
      "footer":"Jian Wu · Matthias Poloczek · Andrew Wilson · Peter Frazier",
      "id":"9302"
   },
   {
      "title":"Variational Inference for Gaussian Process Models with Linear Complexity",
      "footer":"Ching-An Cheng · Byron Boots",
      "id":"9294"
   },
   {
      "title":"Efficient Modeling of Latent Information in Supervised Learning using Gaussian Processes",
      "footer":"Zhenwen Dai · Mauricio A. Álvarez · Neil Lawrence",
      "id":"9289"
   },
   {
      "title":"Non-Stationary Spectral Kernels",
      "footer":"Sami Remes · Markus Heinonen · Samuel Kaski",
      "id":"9241"
   },
   {
      "title":"Scalable Log Determinants for Gaussian Process Kernel Learning",
      "footer":"David Eriksson · Kun Dong · David Bindel · Andrew Wilson · Hannes Nickisch",
      "id":"9403"
   },
   {
      "title":"Spectral Mixture Kernels for Multi-Output Gaussian Processes",
      "footer":"Gabriel Parra · Felipe Tobar",
      "id":"9436"
   },
   {
      "title":"Linearly constrained Gaussian processes",
      "footer":"Carl Jidling · Niklas Wahlström · Adrian Wills · Thomas B Schön",
      "id":"8914"
   },
   {
      "title":"Hindsight Experience Replay",
      "footer":"Marcin Andrychowicz · Filip Wolski · Alex Ray · Jonas Schneider · Rachel Fong · Peter Welinder · Bob McGrew · Josh Tobin · OpenAI Pieter Abbeel · Wojciech Zaremba",
      "id":"9281"
   },
   {
      "title":"Log-normality and Skewness of Estimated State/Action Values in Reinforcement Learning",
      "footer":"Liangpeng Zhang · Ke Tang · Xin Yao",
      "id":"8970"
   },
   {
      "title":"Finite sample analysis of the GTD Policy Evaluation Algorithms in Markov Setting",
      "footer":"Yue Wang",
      "id":"9325"
   },
   {
      "title":"Inverse Filtering for Hidden Markov Models",
      "footer":"Robert Mattila · Cristian Rojas · Vikram Krishnamurthy · Bo Wahlberg",
      "id":"9200"
   },
   {
      "title":"Safe Model-based Reinforcement Learning with Stability Guarantees",
      "footer":"Felix Berkenkamp · Matteo Turchetta · Angela Schoellig · Andreas Krause",
      "id":"8885"
   },
   {
      "title":"Data-Efficient Reinforcement Learning in Continuous State-Action Gaussian-POMDPs",
      "footer":"Rowan McAllister · Carl Edward Rasmussen",
      "id":"8992"
   },
   {
      "title":"Linear regression without correspondence",
      "footer":"Daniel Hsu · Kevin Shi · Xiaorui Sun",
      "id":"8944"
   },
   {
      "title":"On the Complexity of Learning Neural Networks",
      "footer":"Le Song · Santosh Vempala · John Wilmes · Bo Xie",
      "id":"9326"
   },
   {
      "title":"Near Optimal Sketching of Low-Rank Tensor Regression",
      "footer":"Jarvis Haupt · Xingguo Li · David Woodruff",
      "id":"9130"
   },
   {
      "title":"Is Input Sparsity Time Possible for Kernel Low-Rank Approximation?",
      "footer":"Cameron Musco · David Woodruff",
      "id":"9221"
   },
   {
      "title":"Higher-Order Total Variation Classes on Grids: Minimax Theory and Trend Filtering Methods",
      "footer":"Veeranjaneyulu Sadhanala · Yu-Xiang Wang · James Sharpnack · Ryan Tibshirani",
      "id":"9353"
   },
   {
      "title":"Alternating Estimation for Structured High-Dimensional Multi-Response Models",
      "footer":"Sheng Chen · Arindam Banerjee",
      "id":"9068"
   },
   {
      "title":"Adaptive Clustering through Semidefinite Programming",
      "footer":"Martin Royer",
      "id":"8969"
   },
   {
      "title":"Compressing the Gram Matrix for Learning Neural Networks in Polynomial Time",
      "footer":"Surbhi Goel · Adam Klivans",
      "id":"9007"
   },
   {
      "title":"Learning with Average Top-k Loss",
      "footer":"Yanbo Fan · Siwei Lyu · Yiming Ying · Baogang Hu",
      "id":"8846"
   },
   {
      "title":"Hierarchical Clustering Beyond the Worst-Case",
      "footer":"Vincent Cohen-Addad · Varun Kanade · Frederik Mallmann-Trenn",
      "id":"9391"
   },
   {
      "title":"Net-Trim: Convex Pruning of Deep Neural Networks with Performance Guarantee",
      "footer":"Alireza Aghasi · Nam Nguyen · Justin Romberg",
      "id":"9102"
   },
   {
      "title":"A graph-theoretic approach to multitasking",
      "footer":"Noga Alon · Daniel Reichman · Igor Shinkar · Tal Wagner · Sebastian Musslick · Tom Griffiths · Jonathan D Cohen · Biswadip dey · Kayhan Ozcimder",
      "id":"8998"
   },
   {
      "title":"Information-theoretic analysis of generalization capability of learning algorithms",
      "footer":"Maxim Raginsky · Aolin Xu",
      "id":"9039"
   },
   {
      "title":"Independence clustering (without a matrix)",
      "footer":"Daniil Ryabko",
      "id":"9182"
   },
   {
      "title":"Polynomial Codes: an Optimal Design for High-Dimensional Coded Matrix Multiplication",
      "footer":"Qian Yu · Mohammad Maddah-Ali · Salman Avestimehr",
      "id":"9219"
   },
   {
      "title":"Estimating Mutual Information for Discrete-Continuous Mixtures",
      "footer":"Weihao Gao · Sreeram Kannan · Sewoong Oh · Pramod Viswanath",
      "id":"9371"
   },
   {
      "title":"Best Response Regression",
      "footer":"Omer Ben Porat · Moshe Tennenholtz",
      "id":"8941"
   },
   {
      "title":"Statistical Cost Sharing",
      "footer":"Eric Balkanski · Umar Syed · Sergei Vassilvitskii",
      "id":"9393"
   },
   {
      "title":"A Sample Complexity Measure with Applications to Learning Optimal Auctions",
      "footer":"Vasilis Syrgkanis",
      "id":"9310"
   },
   {
      "title":"Multiplicative Weights Update with Constant Step-Size in Congestion Games: Convergence, Limit Cycles and Chaos",
      "footer":"Gerasimos Palaiopanos · Ioannis Panageas · Georgios Piliouras",
      "id":"9360"
   },
   {
      "title":"Efficiency Guarantees from Data",
      "footer":"Darrell Hoy · Denis Nekipelov · Vasilis Syrgkanis",
      "id":"9159"
   },
   {
      "title":"Safe and Nested Subgame Solving for Imperfect-Information Games",
      "footer":"Noam Brown · Tuomas Sandholm",
      "id":"8864"
   },
   {
      "title":"Deep Reinforcement Learning from Human Preferences",
      "footer":"Paul F Christiano · Jan Leike · Tom Brown · Miljan Martic · Shane Legg · Dario Amodei",
      "id":"9209"
   },
   {
      "title":"Multi-Modal Imitation Learning from Unstructured Demonstrations using Generative Adversarial Nets",
      "footer":"Karol Hausman · Yevgen Chebotar · Stefan Schaal · Gaurav Sukhatme · Joseph J Lim",
      "id":"8916"
   },
   {
      "title":"EX2: Exploration with Exemplar Models for Deep Reinforcement Learning",
      "footer":"Justin Fu · John Co-Reyes · Sergey Levine",
      "id":"9044"
   },
   {
      "title":"#Exploration: A Study of Count-Based Exploration for Deep Reinforcement Learning",
      "footer":"Haoran Tang · Pieter Abbeel · Davis Foote · Yan Duan · OpenAI Xi Chen · Rein Houthooft · Adam Stooke · Filip DeTurck",
      "id":"9061"
   },
   {
      "title":"Thinking Fast and Slow with Deep Learning and Tree Search",
      "footer":"Thomas Anthony · Zheng Tian · David Barber",
      "id":"9311"
   },
   {
      "title":"Natural value approximators: learning when to trust past estimates",
      "footer":"Tom Schaul · Zhongwen Xu · Joseph Modayil · Hado van Hasselt · Andre Barreto · David Silver",
      "id":"9000"
   },
   {
      "title":"Active Exploration for Learning Symbolic Representations",
      "footer":"Garrett Andersen · George Konidaris",
      "id":"9277"
   },
   {
      "title":"State Aware Imitation Learning",
      "footer":"Yannick Schroecker · Charles L Isbell",
      "id":"9076"
   },
   {
      "title":"Successor Features for Transfer in Reinforcement Learning",
      "footer":"Andre Barreto · Will Dabney · Remi Munos · Jonathan Hunt · Tom Schaul · David Silver · Hado van Hasselt",
      "id":"9186"
   },
   {
      "title":"Bridging the Gap Between Value and Policy Based Reinforcement Learning",
      "footer":"Ofir Nachum · Mohammad Norouzi · Kelvin Xu · Dale Schuurmans",
      "id":"9063"
   },
   {
      "title":"Using Options and Covariance Testing for Long Horizon Off-Policy Policy Evaluation",
      "footer":"Zhaohan Guo · Philip S. Thomas · Emma Brunskill",
      "id":"9036"
   },
   {
      "title":"Compatible Reward Inverse Reinforcement Learning",
      "footer":"Alberto Maria Metelli · Matteo Pirotta · Marcello Restelli",
      "id":"8993"
   },
   {
      "title":"Adaptive Batch Size for Safe Policy Gradients",
      "footer":"Matteo Papini · Matteo Pirotta · Marcello Restelli",
      "id":"9142"
   },
   {
      "title":"Regret Minimization in MDPs with Options without Prior Knowledge",
      "footer":"Ronan Fruit · Matteo Pirotta · Alessandro Lazaric · Emma Brunskill",
      "id":"9101"
   },
   {
      "title":"Is the Bellman residual a bad proxy?",
      "footer":"Matthieu Geist · Bilal Piot · Olivier Pietquin",
      "id":"9105"
   },
   {
      "title":"Learning Unknown Markov Decision Processes: A Thompson Sampling Approach",
      "footer":"Yi Ouyang · Mukul Gagrani · Ashutosh Nayyar · Rahul Jain",
      "id":"8925"
   },
   {
      "title":"Online Reinforcement Learning in Stochastic Games",
      "footer":"Chen-Yu Wei · Yi-Te Hong · Chi-Jen Lu",
      "id":"9275"
   },
   {
      "title":"Reinforcement Learning under Model Mismatch",
      "footer":"Aurko Roy · Huan Xu · Sebastian Pokutta",
      "id":"9089"
   },
   {
      "title":"Zap Q-Learning",
      "footer":"Adithya M Devraj · Sean Meyn",
      "id":"9011"
   },
   {
      "title":"Ensemble Sampling",
      "footer":"Xiuyuan Lu · Benjamin Van Roy",
      "id":"9110"
   },
   {
      "title":"Action Centered Contextual Bandits",
      "footer":"Kristjan Greenewald · Ambuj Tewari · Susan Murphy · Predag Klasnja",
      "id":"9370"
   },
   {
      "title":"Conservative Contextual Linear Bandits",
      "footer":"Abbas Kazerouni · Mohammad Ghavamzadeh · Yasin Abbasi · Benjamin Van Roy",
      "id":"9172"
   },
   {
      "title":"Rotting Bandits",
      "footer":"Nir Levine · Koby Crammer · Shie Mannor",
      "id":"9092"
   },
   {
      "title":"Identifying Outlier Arms in Multi-Armed Bandit",
      "footer":"Honglei Zhuang · Chi Wang · Yifan Wang",
      "id":"9296"
   },
   {
      "title":"Multi-Task Learning for Contextual Bandits",
      "footer":"Aniket Anand Deshmukh · Urun Dogan · Clay Scott",
      "id":"9261"
   },
   {
      "title":"Boltzmann Exploration Done Right",
      "footer":"Nicolò Cesa-Bianchi · Claudio Gentile · Gergely Neu · Gabor Lugosi",
      "id":"9399"
   },
   {
      "title":"Improving the Expected Improvement Algorithm",
      "footer":"Chao Qin · Diego Klabjan · Daniel Russo",
      "id":"9313"
   },
   {
      "title":"A KL-LUCB algorithm for Large-Scale Crowdsourcing",
      "footer":"Ervin Tanczos · Robert Nowak · Bob Mankoff",
      "id":"9362"
   },
   {
      "title":"Scalable Generalized Linear Bandits: Online Computation and Hashing",
      "footer":"Kwang-Sung Jun · Aniruddha Bhargava · Robert Nowak · Rebecca Willett",
      "id":"8808"
   },
   {
      "title":"Bandits Dueling on Partially Ordered Sets",
      "footer":"Julien Audiffren · Liva Ralaivola",
      "id":"9001"
   },
   {
      "title":"Position-based Multiple-play Multi-armed Bandit Problem with Unknown Position Bias",
      "footer":"Junpei Komiyama · Junya Honda · Akiko Takeda",
      "id":"9276"
   },
   {
      "title":"Online Influence Maximization under Independent Cascade Model with Semi-Bandit Feedback",
      "footer":"Zheng Wen · Branislav Kveton · Michal Valko · Sharan Vaswani",
      "id":"9087"
   },
   {
      "title":"A Scale Free Algorithm for Stochastic Bandits with Bounded Kurtosis",
      "footer":"Tor Lattimore",
      "id":"8949"
   },
   {
      "title":"Adaptive Active Hypothesis Testing under Limited Information",
      "footer":"Fabio Cecchi · Nidhi Hegde",
      "id":"9184"
   },
   {
      "title":"Near-Optimal Edge Evaluation in Explicit Generalized Binomial Graphs",
      "footer":"Sanjiban Choudhury · Shervin Javdani · Siddhartha Srinivasa · Sebastian Scherer",
      "id":"9240"
   },
   {
      "title":"Robust and Efficient Transfer Learning with Hidden Parameter Markov Decision Processes",
      "footer":"Samuel Daulton · Taylor Killian · Finale Doshi-Velez · George Konidaris",
      "id":"9396"
   },
   {
      "title":"Overcoming Catastrophic Forgetting by Incremental Moment Matching",
      "footer":"Sang-Woo Lee · Jin-Hwa Kim · Jaehyun Jun · Jung-Woo Ha · Byoung-Tak Zhang",
      "id":"9242"
   },
   {
      "title":"Hypothesis Transfer Learning via Transformation Functions",
      "footer":"Simon Du · Jayanth Koushik · Aarti Singh · Barnabas Poczos",
      "id":"8853"
   },
   {
      "title":"Learning multiple visual domains with residual adapters",
      "footer":"Sylvestre-Alvise Rebuffi · Hakan Bilen · Andrea Vedaldi",
      "id":"8847"
   },
   {
      "title":"Self-supervised Learning of Motion Capture",
      "footer":"Hsiao-Yu Tung · Hsiao-Wei Tung · Ersin Yumer · Katerina Fragkiadaki",
      "id":"9299"
   },
   {
      "title":"Information Theoretic Properties of Markov Random Fields, and their Algorithmic Applications",
      "footer":"Linus Hamilton · Frederic Koehler · Ankur Moitra",
      "id":"9033"
   },
   {
      "title":"Maximizing Subset Accuracy with Recurrent Neural Networks in Multi-label Classification",
      "footer":"Jinseok Nam · Eneldo Loza Mencía · Hyunwoo J Kim · Johannes Fürnkranz",
      "id":"9316"
   },
   {
      "title":"Local Aggregative Games",
      "footer":"Vikas Garg · Tommi Jaakkola",
      "id":"9309"
   },
   {
      "title":"An Empirical Bayes Approach to Optimizing Machine Learning Algorithms",
      "footer":"James McInerney",
      "id":"9057"
   },
   {
      "title":"Learning Chordal Markov Networks via Branch and Bound",
      "footer":"Kari Rantanen · Antti Hyttinen · Matti Järvisalo",
      "id":"8974"
   },
   {
      "title":"Optimal Sample Complexity of M-wise Data for Top-K Ranking",
      "footer":"Minje Jang · Sunghyun Kim · Changho Suh · Sewoong Oh",
      "id":"8959"
   },
   {
      "title":"Translation Synchronization via Truncated Least Squares",
      "footer":"Xiangru Huang · Zhenxiao Liang · Chandrajit Bajaj · Qixing Huang",
      "id":"8937"
   },
   {
      "title":"From Bayesian Sparsity to Gated Recurrent Nets",
      "footer":"Hao He · Bo Xin · David Wipf",
      "id":"9330"
   },
   {
      "title":"Online Learning for Multivariate Hawkes Processes",
      "footer":"Yingxiang Yang · Jalal Etesami · Niao He · Negar Kiyavash",
      "id":"9270"
   },
   {
      "title":"Efficient Second-Order Online Kernel Learning with Adaptive Embedding",
      "footer":"Daniele Calandriello · Michal Valko · Alessandro Lazaric",
      "id":"9385"
   },
   {
      "title":"Online to Offline Conversions and Adaptive Minibatch Sizes",
      "footer":"Kfir Levy",
      "id":"8952"
   },
   {
      "title":"Nonparametric Online Regression while Learning the Metric",
      "footer":"Ilja Kuzborskij · Nicolò Cesa-Bianchi",
      "id":"8862"
   },
   {
      "title":"Stochastic and Adversarial Online Learning without Hyperparameters",
      "footer":"Ashok Cutkosky · Kwabena A Boahen",
      "id":"9282"
   },
   {
      "title":"Affine-Invariant Online Optimization",
      "footer":"Tomer Koren · Roi Livni",
      "id":"9251"
   },
   {
      "title":"Online Convex Optimization with Stochastic Constraints",
      "footer":"Hao Yu · Michael Neely · Xiaohan Wei",
      "id":"8934"
   },
   {
      "title":"Online Learning with a Hint",
      "footer":"Ofer Dekel · arthur flajolet · Nika Haghtalab · Patrick Jaillet",
      "id":"9305"
   },
   {
      "title":"Efficient Online Linear Optimization with Approximation Algorithms",
      "footer":"Dan Garber",
      "id":"8858"
   },
   {
      "title":"Random Permutation Online Isotonic Regression",
      "footer":"Wojciech Kotlowski · Wouter Koolen · Alan Malek",
      "id":"9198"
   },
   {
      "title":"Minimax Optimal Players for the Finite-Time 3-Expert Prediction Problem",
      "footer":"Yasin Abbasi · Peter Bartlett · Victor Gabillon",
      "id":"9088"
   },
   {
      "title":"Online Learning of Optimal Bidding Strategy in Repeated Multi-Commodity Auctions",
      "footer":"M. Sevi Baltaoglu · Lang Tong · Qing Zhao",
      "id":"9228"
   },
   {
      "title":"Online Prediction with Selfish Experts",
      "footer":"Tim Roughgarden · Okke Schrijvers",
      "id":"8922"
   },
   {
      "title":"Real-Time Bidding with Side Information",
      "footer":"arthur flajolet · Patrick Jaillet",
      "id":"9292"
   },
   {
      "title":"Improving Regret Bounds for Combinatorial Semi-Bandits with Probabilistically Triggered Arms and Its Applications",
      "footer":"Qinshi Wang · Wei Chen",
      "id":"8909"
   },
   {
      "title":"A General Framework for Robust Interactive Learning",
      "footer":"Ehsan Emamjomeh-Zadeh · David Kempe",
      "id":"9474"
   },
   {
      "title":"Practical Locally Private Heavy Hitters",
      "footer":"kobbi nissim · Raef Bassily · Uri Stemmer · Abhradeep Guha Thakurta",
      "id":"9016"
   },
   {
      "title":"Deanonymization in the Bitcoin P2P Network",
      "footer":"Giulia Fanti · Pramod Viswanath",
      "id":"8928"
   },
   {
      "title":"Accuracy First: Selecting a Differential Privacy Level for Accuracy Constrained ERM",
      "footer":"Steven Wu · Bo Waggoner · Seth Neel · Aaron Roth · Katrina Ligett",
      "id":"9043"
   },
   {
      "title":"Renyi Differential Privacy Mechanisms for Posterior Sampling",
      "footer":"Joseph Geumlek · Shuang Song · Kamalika Chaudhuri",
      "id":"9304"
   },
   {
      "title":"Collecting Telemetry Data Privately",
      "footer":"Bolin Ding · Janardhan Kulkarni · Sergey Yekhanin",
      "id":"9140"
   },
   {
      "title":"Generating steganographic images via adversarial training",
      "footer":"Jamie Hayes · George Danezis",
      "id":"8984"
   },
   {
      "title":"Fitting Low-Rank Tensors in Constant Time",
      "footer":"Kohei Hayashi · Yuichi Yoshida",
      "id":"9034"
   },
   {
      "title":"Thy Friend is My Friend: Iterative Collaborative Filtering for Sparse Matrix Estimation",
      "footer":"Christian Borgs · Jennifer Chayes · Christina Lee · Devavrat Shah",
      "id":"9248"
   },
   {
      "title":"Fair Clustering Through Fairlets",
      "footer":"Flavio Chierichetti · Ravi Kumar · Silvio Lattanzi · Sergei Vassilvitskii",
      "id":"9279"
   },
   {
      "title":"On Fairness and Calibration",
      "footer":"Geoff Pleiss · Manish Raghavan · Felix Wu · Jon Kleinberg · Kilian Weinberger",
      "id":"9342"
   },
   {
      "title":"Avoiding Discrimination through Causal Reasoning",
      "footer":"Niki Kilbertus · Mateo Rojas Carulla · Giambattista Parascandolo · Moritz Hardt · Dominik Janzing · Bernhard Schölkopf",
      "id":"8861"
   },
   {
      "title":"Optimized Pre-Processing for Discrimination Prevention",
      "footer":"Flavio Calmon · Dennis Wei · Karthikeyan Natesan Ramamurthy · Bhanukiran Vinzamuri · Kush R Varshney",
      "id":"9180"
   },
   {
      "title":"Recycling for Fairness: Learning with Conditional Distribution Matching Constraints",
      "footer":"Novi Quadrianto · Viktoriia Sharmanska",
      "id":"8863"
   },
   {
      "title":"From Parity to Preference: Learning with Cost-effective Notions of Fairness",
      "footer":"Muhammad Bilal Zafar · Isabel Valera · Manuel Rodriguez · Krishna Gummadi · Adrian Weller",
      "id":"8820"
   },
   {
      "title":"Beyond Parity: Fairness Objectives for Collaborative Filtering",
      "footer":"Sirui Yao · Bert Huang",
      "id":"9077"
   },
   {
      "title":"Multi-view Matrix Factorization for Linear Dynamical System Estimation",
      "footer":"Mahdi Karami · Martha White · Dale Schuurmans · Csaba Szepesvari",
      "id":"9475"
   },
   {
      "title":"Random Projection Filter Bank for Time Series Data",
      "footer":"Amir-massoud Farahmand · Sepideh Pourazarm · Daniel Nikovski",
      "id":"9425"
   },
   {
      "title":"A Dirichlet Mixture Model of Hawkes Processes for Event Sequence Clustering",
      "footer":"Hongteng Xu · Hongyuan Zha",
      "id":"8927"
   },
   {
      "title":"Predicting User Activity Level In Point Process Models With Mass Transport Equation",
      "footer":"Yichen Wang · Xiaojing Ye · Hongyuan Zha · Le Song",
      "id":"8955"
   },
   {
      "title":"Off-policy evaluation for slate recommendation",
      "footer":"Adith Swaminathan · Akshay Krishnamurthy · Alekh Agarwal · Miro Dudik · John Langford · Damien Jose · Imed Zitouni",
      "id":"9146"
   },
   {
      "title":"Expectation Propagation with Stochastic Kinetic Model in Complex Interaction Systems",
      "footer":"Wen Dong · Le Fang · Fan Yang · Tong Guan · Chunming Qiao",
      "id":"8991"
   },
   {
      "title":"A multi-agent reinforcement learning model of common-pool resource appropriation",
      "footer":"Julien Pérolat · Joel Leibo · Vinicius Zambaldi · Charles Beattie · Karl Tuyls · Thore Graepel",
      "id":"9147"
   },
   {
      "title":"Balancing information exposure in social networks",
      "footer":"Kiran Garimella · Aristides Gionis · Nikos Parotsidis · Nikolaj Tatti",
      "id":"9243"
   },
   {
      "title":"Scalable Demand-Aware Recommendation",
      "footer":"Jinfeng Yi · Cho-Jui Hsieh · Kush R Varshney · Lijun Zhang · Yao Li",
      "id":"9028"
   },
   {
      "title":"A Greedy Approach for Budgeted Maximum Inner Product Search",
      "footer":"Hsiang-Fu Yu · Cho-Jui Hsieh · Qi Lei · Inderjit S Dhillon",
      "id":"9320"
   },
   {
      "title":"DPSCREEN: Dynamic Personalized Screening",
      "footer":"Kartik Ahuja · William Zame · Mihaela van der Schaar",
      "id":"8924"
   },
   {
      "title":"Deep Multi-task Gaussian Processes for Survival Analysis with Competing Risks",
      "footer":"Ahmed M. Alaa · Mihaela van der Schaar",
      "id":"9020"
   },
   {
      "title":"Premise Selection for Theorem Proving by Deep Graph Embedding",
      "footer":"Mingzhe Wang · Yihe Tang · Jian Wang · Jia Deng",
      "id":"9064"
   },
   {
      "title":"Gradients of Generative Models for Improved Discriminative Analysis of Tandem Mass Spectra",
      "footer":"John T Halloran · David M Rocke",
      "id":"9346"
   },
   {
      "title":"Style Transfer from Non-parallel Text by Cross-Alignment",
      "footer":"Tianxiao Shen · Tao Lei · Regina Barzilay · Tommi Jaakkola",
      "id":"9450"
   },
   {
      "title":"Emergence of Language with Multi-agent Games: Learning to Communicate with Sequences of Symbols",
      "footer":"Serhii Havrylov · Ivan Titov",
      "id":"9003"
   },
   {
      "title":"ELF: An Extensive, Lightweight and Flexible Research Platform for Real-time Strategy Games",
      "footer":"Yuandong Tian · Qucheng Gong · Wenling Shang · Yuxin Wu · C. Lawrence Zitnick",
      "id":"9052"
   },
   {
      "title":"ExtremeWeather: A large-scale climate dataset for semi-supervised detection, localization, and understanding of extreme weather events",
      "footer":"Evan Racah · Christopher Beckham · Tegan Maharaj · Mr. Prabhat · Chris Pal",
      "id":"9124"
   },
   {
      "title":"Approximation and Convergence Properties of Generative Adversarial Learning",
      "footer":"Shuang Liu · Olivier Bousquet · Kamalika Chaudhuri",
      "id":"9329"
   },
   {
      "title":"Gradient descent GAN optimization is locally stable",
      "footer":"Vaishnavh Nagarajan · J. Zico Kolter",
      "id":"9333"
   },
   {
      "title":"f-GANs in an Information Geometric Nutshell",
      "footer":"Richard Nock · Zac Cranko · Aditya K Menon · Lizhen Qu · Robert C Williamson",
      "id":"8842"
   },
   {
      "title":"The Numerics of GANs",
      "footer":"Lars Mescheder · Sebastian Nowozin · Andreas Geiger",
      "id":"8972"
   },
   {
      "title":"Generalizing GANs: A Turing Perspective",
      "footer":"Roderich Gross · Yue Gu · Wei Li · Melvin Gauci",
      "id":"9402"
   },
   {
      "title":"Dualing GANs",
      "footer":"Yujia Li · Alexander Schwing · Kuan-Chieh Wang · Richard Zemel",
      "id":"9335"
   },
   {
      "title":"Fisher GAN",
      "footer":"Youssef Mroueh · Tom Sercu",
      "id":"9038"
   },
   {
      "title":"Learning to Pivot with Adversarial Networks",
      "footer":"Gilles Louppe · Michael Kagan · Kyle Cranmer",
      "id":"8892"
   },
   {
      "title":"Improved Training of Wasserstein GANs",
      "footer":"Ishaan Gulrajani · Faruk Ahmed · Martin Arjovsky · Vincent Dumoulin · Aaron C Courville",
      "id":"9350"
   },
   {
      "title":"MMD GAN: Towards Deeper Understanding of Moment Matching Network",
      "footer":"Chun-Liang Li · Wei-Cheng Chang · Yu Cheng · Yiming Yang · Barnabas Poczos",
      "id":"9008"
   },
   {
      "title":"Two Time-Scale Update Rule for Generative Adversarial Nets",
      "footer":"Hubert Ramsauer · Martin Heusel · Sepp Hochreiter · Bernhard Nessler · Thomas Unterthiner",
      "id":"9431"
   },
   {
      "title":"VEEGAN: Reducing Mode Collapse in GANs using Implicit Variational Learning",
      "footer":"Akash Srivastava · Lazar Valkoz · Chris Russell · Michael U. Gutmann · Charles Sutton",
      "id":"9115"
   },
   {
      "title":"Improved Semi-supervised Learning with GANs using Manifold Invariances",
      "footer":"Abhishek Kumar · Prasanna Sattigeri · Tom Fletcher",
      "id":"9328"
   },
   {
      "title":"Good Semi-supervised Learning That Requires a Bad GAN",
      "footer":"Zihang Dai · Zhilin Yang · Fan Yang · William W Cohen · Ruslan Salakhutdinov",
      "id":"9420"
   },
   {
      "title":"Bayesian GANs",
      "footer":"Yunus Saatci · Andrew Wilson",
      "id":"9145"
   },
   {
      "title":"Dual Discriminator Generative Adversarial Nets",
      "footer":"Tu Nguyen · Trung Le · Hung Vu · Dinh Phung",
      "id":"9053"
   },
   {
      "title":"Towards Understanding Adversarial Learning for Joint Distribution Matching",
      "footer":"Chunyuan Li · Hao Liu · Ricardo Henao · Liqun Chen · Yuchen Pu · Changyou Chen · Lawrence Carin",
      "id":"9324"
   },
   {
      "title":"Triple Generative Adversarial Nets",
      "footer":"Chongxuan LI · Kun Xu · Jun Zhu · Bo Zhang",
      "id":"9189"
   },
   {
      "title":"Triangle Generative Adversarial Networks",
      "footer":"Zhe Gan · Liqun Chen · Weiyao Wang · Yuchen Pu · Yizhe Zhang · Lawrence Carin",
      "id":"9300"
   },
   {
      "title":"Structured Generative Adversarial Networks",
      "footer":"Hao Zhang · Zhijie Deng · Xiaodan Liang · Jun Zhu · Eric P Xing",
      "id":"9171"
   },
   {
      "title":"PixelGAN Autoencoders",
      "footer":"Alireza Makhzani · Brendan J Frey",
      "id":"8986"
   },
   {
      "title":"Learning to Compose Domain-Specific Transformations for Data Augmentation",
      "footer":"Alexander Ratner · Henry Ehrenberg · Zeshan Hussain · Jared Dunnmon · Christopher Ré",
      "id":"9108"
   },
   {
      "title":"Unsupervised Image-to-Image Translation Networks",
      "footer":"Ming-Yu Liu · Thomas Breuel · Jan Kautz",
      "id":"8865"
   },
   {
      "title":"Adversarial Invariant Feature Learning",
      "footer":"Qizhe Xie · Zihang Dai · Yulun Du · Eduard Hovy · Graham Neubig",
      "id":"8854"
   },
   {
      "title":"Adversarial Ranking for Language Generation",
      "footer":"Dianqi Li · Kevin Lin · Xiaodong He · Ming-ting Sun · Zhengyou Zhang",
      "id":"9100"
   },
   {
      "title":"Efficient Computation of Moments in Sum-Product Networks",
      "footer":"Han Zhao · Geoffrey Gordon",
      "id":"9456"
   },
   {
      "title":"Attention is All you Need",
      "footer":"Ashish Vaswani · Noam Shazeer · Niki Parmar · Llion Jones · Jakob Uszkoreit · Aidan N Gomez · Łukasz Kaiser",
      "id":"9372"
   },
   {
      "title":"Masked Autoregressive Flow for Density Estimation",
      "footer":"George Papamakarios · Iain Murray · Theo Pavlakou",
      "id":"9021"
   },
   {
      "title":"Variational Walkback: Learning a Transition Operator as a Stochastic Recurrent Net",
      "footer":"Anirudh Goyal ALIAS PARTH GOYAL · Nan Ke · Surya Ganguli · Yoshua Bengio",
      "id":"9218"
   },
   {
      "title":"TernGrad: Ternary Gradients to Reduce Communication in Distributed Deep Learning",
      "footer":"Wei Wen · Cong Xu · Feng Yan · Chunpeng Wu · Yandan Wang · Yiran Chen · Hai Li",
      "id":"8942"
   },
   {
      "title":"End-to-end Differentiable Proving",
      "footer":"Tim Rocktäschel · Sebastian Riedel",
      "id":"9161"
   },
   {
      "title":"A simple neural network module for relational reasoning",
      "footer":"Adam Santoro · David Raposo · David Barrett · Mateusz Malinowski · Razvan Pascanu · Peter Battaglia · Tim Lillicrap",
      "id":"9273"
   },
   {
      "title":"Dual Path Networks",
      "footer":"Yunpeng Chen · Jianan Li · Huaxin Xiao · Xiaojie Jin · Shuicheng Yan · Jiashi Feng",
      "id":"9224"
   },
   {
      "title":"Spherical convolutions and their application in molecular modelling",
      "footer":"Wouter Boomsma · Jes Frellsen",
      "id":"9127"
   },
   {
      "title":"Deep Sets",
      "footer":"Manzil Zaheer · Satwik Kottur · Siamak Ravanbakhsh · Barnabas Poczos · Ruslan Salakhutdinov · Alexander Smola",
      "id":"9123"
   },
   {
      "title":"Simple and Scalable Predictive Uncertainty Estimation using Deep Ensembles",
      "footer":"Balaji Lakshminarayanan · Alexander Pritzel · Charles Blundell",
      "id":"9410"
   },
   {
      "title":"Self-Normalizing Neural Networks",
      "footer":"Günter Klambauer · Thomas Unterthiner · Andreas Mayr · Sepp Hochreiter",
      "id":"8891"
   },
   {
      "title":"Batch Renormalization: Towards Reducing Minibatch Dependence in Batch-Normalized Models",
      "footer":"Sergey Ioffe",
      "id":"8983"
   },
   {
      "title":"Train longer, generalize better: closing the generalization gap in large batch training of neural networks",
      "footer":"Elad Hoffer · Itay Hubara · Daniel Soudry",
      "id":"8963"
   },
   {
      "title":"Nonlinear random matrix theory for deep learning",
      "footer":"Jeffrey Pennington · Pratik Worah",
      "id":"9050"
   },
   {
      "title":"DisTraL: Robust multitask reinforcement learning",
      "footer":"Yee Teh · Victor Bapst · Razvan Pascanu · Nicolas Heess · John Quan · James Kirkpatrick · Wojciech M. Czarnecki · Raia Hadsell",
      "id":"9227"
   },
   {
      "title":"Imagination-Augmented Agents for Deep Reinforcement Learning",
      "footer":"Sébastien Racanière · David Reichert · Theophane Weber · Oriol Vinyals · Daan Wierstra · Lars Buesing · Peter Battaglia · Razvan Pascanu · Yujia Li · Nicolas Heess · Arthur Guez · Danilo Jimenez Rezende · Adrià Puigdomènech Badia · David Silver",
      "id":"9343"
   },
   {
      "title":"Second-order Optimization in Deep Reinforcement Learning using Kronecker-factored Approximation",
      "footer":"Yuhuai Wu · Elman Mansimov · Roger Grosse · Shun Liao · Jimmy Ba",
      "id":"9303"
   },
   {
      "title":"Learning Combinatorial Optimization Algorithms over Graphs",
      "footer":"Elias Khalil · Hanjun Dai · Yuyu Zhang · Bistra Dilkina · Le Song",
      "id":"9405"
   },
   {
      "title":"Targeting EEG/LFP Synchrony with Neural Nets",
      "footer":"Yitong Li · David E Carlson · Lawrence Carin",
      "id":"9239"
   },
   {
      "title":"Toward Goal-Driven Neural Network Models for the Rodent Whisker-Trigeminal System",
      "footer":"Chengxu Zhuang · Jonas Kubilius · Mitra JZ Hartmann · Daniel Yamins",
      "id":"9042"
   },
   {
      "title":"Fast amortized inference of neural activity from calcium imaging data with variational autoencoders",
      "footer":"Artur Speiser · Jinyao Yan · Evan Archer · Lars Buesing · Srinivas C Turaga · Jakob H Macke",
      "id":"9183"
   },
   {
      "title":"Scene Physics Acquisition via Visual De-animation",
      "footer":"Jiajun Wu · Erika Lu · Pushmeet Kohli · Bill Freeman · Josh Tenenbaum",
      "id":"8813"
   },
   {
      "title":"Shape and Material from Sound",
      "footer":"zhoutong zhang · Qiujia Li · Zhengjia Huang · Jiajun Wu · Josh Tenenbaum · Bill Freeman",
      "id":"8920"
   },
   {
      "title":"Deep Networks for Decoding Natural Images from Retinal Signals",
      "footer":"Nikhil Parthasarathy · Eleanor Batty · William Falcon · Thomas Rutten · Mohit Rajpal · E.J. Chichilnisky · Liam Paninski",
      "id":"9413"
   },
   {
      "title":"Quantifying how much sensory information in a neural code is relevant for behavior",
      "footer":"Giuseppe Pica · Eugenio Piasini · Houman Safaai · Caroline Runyan · Christopher Harvey · Mathew Diamond · Christoph Kayser · Tommaso Fellin · Stefano Panzeri",
      "id":"9151"
   },
   {
      "title":"Model-based Bayesian inference of neural activity and connectivity from all-optical interrogation of a neural circuit",
      "footer":"Laurence Aitchison · Lloyd Russell · Adam Packer · Jinyao Yan · Philippe Castonguay · Michael Hausser · Srinivas C Turaga",
      "id":"9132"
   },
   {
      "title":"Deep Hyperalignment",
      "footer":"Muhammad Yousefnezhad · Daoqiang Zhang",
      "id":"8951"
   },
   {
      "title":"Tensor encoding and decomposition of brain connectomes with application to tractography evaluation",
      "footer":"Cesar F Caiafa · Olaf Sporns · Andrew Saykin · Franco Pestilli",
      "id":"9213"
   },
   {
      "title":"Online Dynamic Programming",
      "footer":"Holakou Rahmanian · Manfred Warmuth",
      "id":"9476"
   },
   {
      "title":"Unsupervised Learning of Disentangled Representations from Video",
      "footer":"Emily Denton · vighnesh Birodkar",
      "id":"9477"
   },
   {
      "title":"Interactive Submodular Bandit",
      "footer":"Lin Chen · Andreas Krause · Amin Karbasi",
      "id":"8812"
   },
   {
      "title":"Streaming Robust Submodular Maximization:A Partitioned Thresholding Approach",
      "footer":"Slobodan Mitrovic · Ilija Bogunovic · Ashkan Norouzi-Fard · Jakub M Tarnawski · Volkan Cevher",
      "id":"9233"
   },
   {
      "title":"Minimizing a Submodular Function from Samples",
      "footer":"Eric Balkanski · Yaron Singer",
      "id":"8876"
   },
   {
      "title":"Process-constrained batch Bayesian optimisation",
      "footer":"Pratibha Vellanki · Santu Rana · Sunil Gupta · David Rubin · Alessandra Sutti · Thomas Dorin · Murray Height · Paul Sanders · Svetha Venkatesh",
      "id":"9125"
   },
   {
      "title":"The Marginal Value of Adaptive Gradient Methods in Machine Learning",
      "footer":"Ashia C Wilson · Rebecca Roelofs · Mitchell Stern · Nati Srebro · Benjamin Recht",
      "id":"9195"
   },
   {
      "title":"Breaking the Nonsmooth Barrier: A Scalable Parallel Method for Composite Optimization",
      "footer":"Fabian Pedregosa · Rémi Leblond · Simon Lacoste-Julien",
      "id":"8804"
   },
   {
      "title":"Beyond Worst-case: A Probabilistic Analysis of Affine Policies in Dynamic Optimization",
      "footer":"Omar El Housni · Vineet Goyal",
      "id":"9252"
   },
   {
      "title":"Approximate Supermodularity Bounds for Experimental Design",
      "footer":"Luiz Chamon · Alejandro Ribeiro",
      "id":"9315"
   },
   {
      "title":"On Blackbox Backpropagation and Jacobian Sensing",
      "footer":"Krzysztof M Choromanski · Vikas Sindhwani",
      "id":"9421"
   },
   {
      "title":"Asynchronous Coordinate Descent under More Realistic Assumptions",
      "footer":"Tao Sun · Robert Hannah · Wotao Yin",
      "id":"9389"
   },
   {
      "title":"Clustering with Noisy Queries",
      "footer":"Arya Mazumdar · Barna Saha",
      "id":"9352"
   },
   {
      "title":"Approximation Algorithms for ℓ0-Low Rank Approximation",
      "footer":"Karl Bringmann · Pavel Kolev · David Woodruff",
      "id":"9433"
   },
   {
      "title":"Convergence Analysis of Two-layer Neural Networks with ReLU Activation",
      "footer":"Yuanzhi Li · Yang Yuan",
      "id":"8855"
   },
   {
      "title":"Can Decentralized Algorithms Outperform Centralized Algorithms? A Case Study for Decentralized Parallel Stochastic Gradient Descent",
      "footer":"Xiangru Lian · Ce Zhang · Huan Zhang · Cho-Jui Hsieh · Wei Zhang · Ji Liu",
      "id":"9308"
   },
   {
      "title":"Decomposition-Invariant Conditional Gradient for General Polytopes with Line Search",
      "footer":"Mohammad Ali Bashiri · Xinhua Zhang",
      "id":"9055"
   },
   {
      "title":"Straggler Mitigation in Distributed Optimization Through Data Encoding",
      "footer":"Can Karakus · Yifan Sun · Suhas Diggavi · Wotao Yin",
      "id":"9318"
   },
   {
      "title":"No More Fixed Penalty Parameter in ADMM: Faster Convergence with New Adaptive Penalization",
      "footer":"Yi Xu · Mingrui Liu · Tianbao Yang · Qihang Lin",
      "id":"8919"
   },
   {
      "title":"Accelerated Stochastic Greedy Coordinate Descent by Soft Thresholding Projection onto Simplex",
      "footer":"Chaobing Song · Shaobo Cui · Shu-Tao Xia · Yong Jiang",
      "id":"9260"
   },
   {
      "title":"Safe Adaptive Importance Sampling",
      "footer":"Sebastian Stich · Anant Raj · Martin Jaggi",
      "id":"9217"
   },
   {
      "title":"Sharpness, Restart and Acceleration",
      "footer":"Vincent Roulet · Alexandre d'Aspremont",
      "id":"8905"
   },
   {
      "title":"Stochastic Optimization with Variance Reduction for Infinite Datasets with Finite Sum Structure",
      "footer":"Alberto Bietti · Julien Mairal",
      "id":"8953"
   },
   {
      "title":"Min-Max Propagation",
      "footer":"Christopher Srinivasa · Inmar Givoni · Siamak Ravanbakhsh · Brendan J Frey",
      "id":"9331"
   },
   {
      "title":"A Disentangled Recognition and Nonlinear Dynamics Model for Unsupervised Learning",
      "footer":"Marco Fraccaro · Simon Kamronn · Ulrich Paquet · Ole Winther",
      "id":"9143"
   },
   {
      "title":"Concrete Dropout",
      "footer":"Yarin Gal · Jiri Hron · Alex Kendall",
      "id":"9141"
   },
   {
      "title":"REBAR: Low-variance, unbiased gradient estimates for discrete latent variable models",
      "footer":"George Tucker · Andriy Mnih · Chris J Maddison · John Lawson · Jascha Sohl-Dickstein",
      "id":"9049"
   },
   {
      "title":"Hierarchical Implicit Models and Likelihood-Free Variational Inference",
      "footer":"Dustin Tran · Rajesh Ranganath · David Blei",
      "id":"9327"
   },
   {
      "title":"Sticking the Landing: Simple, Lower-Variance Gradient Estimators for Variational Inference",
      "footer":"Geoffrey Roeder · Yuhuai Wu · David Duvenaud",
      "id":"9459"
   },
   {
      "title":"Perturbative Black Box Variational Inference",
      "footer":"Cheng Zhang · Robert Bamler · Manfred Opper · Stephan Mandt",
      "id":"9284"
   },
   {
      "title":"Fast Black-box Variational Inference through Stochastic Trust-Region Optimization",
      "footer":"Jeffrey Regier · Michael Jordan · Jon McAuliffe",
      "id":"9027"
   },
   {
      "title":"Excess Risk Bounds for the Bayes Risk using Variational Inference in Latent Gaussian Models",
      "footer":"Rishit Sheth · Roni Khardon",
      "id":"9291"
   },
   {
      "title":"Learning Causal Graphs with Latent Variables",
      "footer":"Murat Kocaoglu · Karthikeyan Shanmugam · Elias Bareinboim",
      "id":"9468"
   },
   {
      "title":"Permutation-based Causal Inference Algorithms with Interventions",
      "footer":"Yuhao Wang · Liam Solus · Karren Yang · Caroline Uhler",
      "id":"9355"
   },
   {
      "title":"Learning Causal Structures Using Regression Invariance",
      "footer":"AmirEmad Ghassami · Saber Salehkaleybar · Negar Kiyavash · Kun Zhang",
      "id":"9086"
   },
   {
      "title":"Counterfactual Fairness",
      "footer":"Matt Kusner · Joshua Loftus · Chris Russell · Ricardo Silva",
      "id":"9187"
   },
   {
      "title":"Causal Effect Inference with Deep Latent Variable Models",
      "footer":"Christos Louizos · Uri Shalit · Joris M Mooij · David Sontag · Richard Zemel · Max Welling",
      "id":"9414"
   },
   {
      "title":"Conic Scan Coverage algorithm for nonparametric topic modeling",
      "footer":"Mikhail Yurochkin · Aritra Guha · XuanLong Nguyen",
      "id":"9169"
   },
   {
      "title":"Tractability in Structured Probability Spaces",
      "footer":"Arthur Choi · Yujia Shen · Adnan Darwiche",
      "id":"9131"
   },
   {
      "title":"PASS-GLM: polynomial approximate sufficient statistics for scalable Bayesian GLM inference",
      "footer":"Jonathan Huggins · Ryan Adams · Tamara Broderick",
      "id":"9144"
   },
   {
      "title":"Adaptive Bayesian Sampling with Monte Carlo EM",
      "footer":"Anirban Roychowdhury · Srinivasan Parthasarathy",
      "id":"8918"
   },
   {
      "title":"What-If Reasoning using Counterfactual Gaussian Processes",
      "footer":"Peter Schulam · Suchi Saria",
      "id":"8960"
   },
   {
      "title":"Multi-Information Source Optimization",
      "footer":"Matthias Poloczek · Jialei Wang · Peter Frazier",
      "id":"9208"
   },
   {
      "title":"Doubly Stochastic Variational Inference for Deep Gaussian Processes",
      "footer":"Hugh Salimbeni · Marc Deisenroth",
      "id":"9236"
   },
   {
      "title":"Convolutional Gaussian Processes",
      "footer":"Mark van der Wilk · Carl Edward Rasmussen · James Hensman",
      "id":"9069"
   },
   {
      "title":"Multiresolution Kernel Approximation for Gaussian Process Regression",
      "footer":"Yi Ding · Risi Kondor · Jonathan Eskreis-Winkler",
      "id":"9156"
   },
   {
      "title":"Unifying PAC and Regret: Uniform PAC Bounds for Episodic Reinforcement Learning",
      "footer":"Christoph Dann · Tor Lattimore · Emma Brunskill",
      "id":"9345"
   },
   {
      "title":"Repeated Inverse Reinforcement Learning",
      "footer":"Kareem Amin · Nan Jiang · Satinder Singh",
      "id":"8971"
   },
   {
      "title":"Inverse Reward Design",
      "footer":"Dylan Hadfield-Menell · Smitha Milli · Stuart J Russell · Pieter Abbeel · Anca Dragan",
      "id":"9444"
   },
   {
      "title":"Utile Context Tree Weighting",
      "footer":"Joao V Messias · Shimon Whiteson",
      "id":"9117"
   },
   {
      "title":"Policy Gradient With Value Function Approximation For Collective Multiagent Planning",
      "footer":"Duc Thien Nguyen · Akshat Kumar · Hoong Chuin Lau",
      "id":"9211"
   },
   {
      "title":"A Unified Game-Theoretic Approach to Multiagent Reinforcement Learning",
      "footer":"Marc Lanctot · Vinicius Zambaldi · Audrunas Gruslys · Angeliki Lazaridou · karl Tuyls · Julien Perolat · David Silver · Thore Graepel",
      "id":"9199"
   },
   {
      "title":"Dynamic Safe Interruptibility for Decentralized Multi-Agent Reinforcement Learning",
      "footer":"El Mahdi El Mhamdi · Rachid Guerraoui · Hadrien Hendrikx · Alexandre Maurer",
      "id":"8811"
   },
   {
      "title":"Multi-Agent Actor-Critic for Mixed Cooperative-Competitive Environments",
      "footer":"Ryan Lowe · YI WU · Aviv Tamar · Jean Harb · OpenAI Pieter Abbeel · Igor Mordatch",
      "id":"9408"
   },
   {
      "title":"Spectrally-normalized margin bounds for neural networks",
      "footer":"Matus Telgarsky · Peter Bartlett · Dylan J Foster",
      "id":"9395"
   },
   {
      "title":"On Structured Prediction Theory with Calibrated Convex Surrogate Losses",
      "footer":"Anton Osokin · Francis Bach · Simon Lacoste-Julien",
      "id":"8827"
   },
   {
      "title":"Collaborative PAC Learning",
      "footer":"Avrim Blum · Nika Haghtalab · Ariel D Procaccia · IIIS Mingda Qiao",
      "id":"9026"
   },
   {
      "title":"Submultiplicative Glivenko-Cantelli and Uniform Convergence of Revenues",
      "footer":"Noga Alon · Moshe Babaioff · Yannai A. Gonczarowski · Yishay Mansour · Shay Moran · Amir Yehudayoff",
      "id":"8956"
   },
   {
      "title":"Discriminative State Space Models",
      "footer":"Vitaly Kuznetsov · Mehryar Mohri",
      "id":"9341"
   },
   {
      "title":"Delayed Mirror Descent in Continuous Games",
      "footer":"Zhengyuan Zhou · Panayotis Mertikopoulos · Nicholas Bambos · Peter W Glynn · Claire Tomlin",
      "id":"9388"
   },
   {
      "title":"Variance-based Regularization with Convex Objectives",
      "footer":"Hongseok Namkoong · John C Duchi",
      "id":"9082"
   },
   {
      "title":"Learning Mixture of Gaussians with Streaming Data",
      "footer":"Aditi Raghunathan · Prateek Jain · Ravishankar Krishnawamy",
      "id":"9429"
   },
   {
      "title":"On the Consistency of Quick Shift",
      "footer":"Heinrich Jiang",
      "id":"8802"
   },
   {
      "title":"Early stopping for kernel boosting algorithms: A general analysis with localized complexities",
      "footer":"Yuting Wei · Fanny Yang · Martin Wainwright",
      "id":"9378"
   },
   {
      "title":"A Sharp Error Analysis for the Fused Lasso, with Implications to Broader Settings and Approximate Screening",
      "footer":"Kevin Lin · James Sharpnack · Alessandro Rinaldo · Ryan Tibshirani",
      "id":"9455"
   },
   {
      "title":"The Scaling Limit of High-Dimensional Online Independent Component Analysis",
      "footer":"Chuang Wang · Yue Lu",
      "id":"9432"
   },
   {
      "title":"A Universal Analysis of Large-Scale Regularized Least Squares Solutions",
      "footer":"Ashkan Panahi · Babak Hassibi",
      "id":"9122"
   },
   {
      "title":"Statistical Convergence Analysis of Gradient EM on General Gaussian Mixture Models",
      "footer":"Bowei Yan · Mingzhang Yin · Purnamrita Sarkar",
      "id":"9462"
   },
   {
      "title":"Online control of the false discovery rate with decaying memory",
      "footer":"Aaditya Ramdas · Fanny Yang · Martin Wainwright · Michael Jordan",
      "id":"9339"
   },
   {
      "title":"Learning with Bandit Feedback in Potential Games",
      "footer":"Amélie Heliou · Johanne Cohen · Panayotis Mertikopoulos",
      "id":"9407"
   },
   {
      "title":"Fully Decentralized Policies for Multi-Agent Systems: An Information Theoretic Approach",
      "footer":"Roel Dobbe · David Fridovich-Keil · Claire Tomlin",
      "id":"9079"
   },
   {
      "title":"Revenue Optimization with Approximate Bid Predictions",
      "footer":"Andres Munoz · Sergei Vassilvitskii",
      "id":"8975"
   },
   {
      "title":"A Decomposition of Forecast Error in Prediction Markets",
      "footer":"Miro Dudik · Sebastien Lahaie · Ryan M Rogers · Jennifer Wortman Vaughan",
      "id":"9216"
   },
   {
      "title":"Dynamic Revenue Sharing",
      "footer":"Santiago Balseiro · Max Lin · Vahab Mirrokni · Renato Leme · IIIS Song Zuo",
      "id":"9054"
   },
   {
      "title":"Multi-View Decision Processes",
      "footer":"Christos Dimitrakakis · David Parkes · Goran Radanovic · Paul Tylkin",
      "id":"9319"
   }
];

export default data;