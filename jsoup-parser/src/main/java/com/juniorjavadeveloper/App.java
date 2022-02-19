package com.juniorjavadeveloper;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.IOException;

public class App {
    public static void main(String[] args) {

        Document doc = null;
        try {
            doc = Jsoup.connect("http://dannci.wpmasters.org/marlow/").get();
//            System.out.println(doc);
        } catch (IOException e) {
            e.printStackTrace();
        }
//        String title = doc.title();
//        System.out.println(title);

//        doc.select("div.about-widget").forEach(System.out::println);
//        System.out.println(doc.select("div.about-widget").first());

//        doc.select("div.about-widget").first().children().forEach(element -> {
//            System.out.println(element);
//            System.out.println("\n----------------------\n");
//        });

        String about = doc.select("div.about-widget > p").first().text();
        System.out.println(about);

        String hello = doc.select("h2.author_name").first().text();
        System.out.println(hello);

        String image = doc.select("div.about-image > img").attr("src");
        String image_directly = doc.select("img.tranz.authorlogo").attr("src");
        System.out.println(image);
        System.out.println(image_directly);


    }
}
