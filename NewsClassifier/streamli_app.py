import streamlit as st
# import os
# from PIL import Image
import requests


# Function For Analysing Tokens and Lemma

def text_analyzer(news_text):
    allData = requests.post('http://127.0.0.1:8000/classifier/predict/', json={"text": news_text})
    print(allData.json())
    return allData.json()


def main():
    # Title
    st.set_page_config(page_title='طبقه بندی خبر', layout='wide', initial_sidebar_state='auto',)

    st.title("طبقه بند خبر")
    st.subheader("طبقه بندی خبر با استفاده از الگوریتم های یادگیری ماشین")

    st.subheader("متن خبر")
    text = st.text_area("",
                        "یک متن از پیش تعریف شده اینجا بنویسید")
    if st.button("دریافت پاسخ"):
        nlp_result = text_analyzer(text)
        st.text(nlp_result['category'])

    st.sidebar.subheader("درباره پروژه")
    st.sidebar.text("طبقه بند خبر فارسی")
    st.sidebar.info("این پروژه با استفاده از الگوریتم های یادگیری ماشین به صورت خودکار میتواند اخبار سیاسی اقتصادی و یا اجتماعی را تشخیص دهد")

    st.sidebar.subheader("اعضای گروه")
    st.sidebar.text("سجاد یزدان پرست")
    st.sidebar.text("معین حسینی")

if __name__ == "__main__":
    main()