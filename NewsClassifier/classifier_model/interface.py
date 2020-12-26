import pickle 
from parsivar import * 


stop_words = pickle.load(open('./data/hazm_stopwords.pkl','rb'))
stop_words = stop_words.split(',')


def preprocessing(text) :
    normalizer = Normalizer()
    tokenizer = Tokenizer()
    stemmer = FindStems()

    all_sentences = tokenizer.tokenize_sentences(text) 
    new_sents = [] 

    for sent in all_sentences :
        all_words = tokenizer.tokenize_words(normalizer.normalize(sent)) 
        new_sent = [ stemmer.convert_to_stem(word).split('&')[0] for word in all_words if word not in stop_words]
        new_sent = ' '.join(new_sent)
        new_sents.append(new_sent)

    return ' '.join(new_sents)



class ModelInterface :

    LABELS = {
        3 : 'سیاسی',
        5 : 'اقتصادی',
        7 : 'اجتماعی',
    }

    def __init__(self) :

        self.pipline= pickle.load(open('./data/model_parsivar.pkl','rb'))
    

    def predict(self,text) :
        return ModelInterface.LABELS[self.pipline.predict([text])[0]]



interface = ModelInterface()
