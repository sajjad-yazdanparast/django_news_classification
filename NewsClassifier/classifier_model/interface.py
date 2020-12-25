import pickle 
from parsivar import * 
from django.conf import settings 
import os 


class ModelInterface :

    def __init__(self) :
        self.stop_words = pickle.load(open(os.path.join(settings.BASE_DIR,'/model/data/hazm_stopwords.pkl'),'rb'))
        self.stop_words = stop_words.split(',')

        self.pipline = pickle.load(open(os.path.join(settings.BASE_DIR,'/model/data/parsivar_model.pkl'),'rb'))


    def preprocessing(self, text) :
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




inteface = ModelInterface() 
