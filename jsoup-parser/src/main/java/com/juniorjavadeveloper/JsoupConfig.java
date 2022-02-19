package com.juniorjavadeveloper;

import org.jsoup.Jsoup;

public class JsoupConfig {
    public static void main(String[] args) {

        Jsoup.connect("http://dannci.wpmasters.org/marlow/")
                .userAgent("MMozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36")
                .ignoreHttpErrors(true)
                .followRedirects(true)
                .timeout(15000)
                .cookie("cookie", "smoockie")
                .referrer("https://www.google.lt");
    }
}
