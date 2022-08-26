package pierwszy_projekt_java_ramka;

import javax.swing.*;
import java.awt.*;


public class Pierwszy_Projekt_Java_Ramka {

    public Pierwszy_Projekt_Java_Ramka(){ //Tworzymy nowy obiekt publiczny nazywamy go tak jak główna klasa
        JFrame frame = new JFrame(); // Tworzymy nową ramkę i wywołujemy ją w głównym oknie w funkcji Main
        frame.setTitle("Tytuł ramki"); //Dodaje nam tytuł do ramki czyli to co jest na górze, możemy go dodac również wpisując w konstruktorze
        frame.setSize(100, 100); // Ustawienie szeroko9ści i wysokości ramki
        frame.setLocation(100, 100); //Ustawienie lokalizacji 
        //Ustawienie położenia oraz wielkości można załątwić w jednym poleceniu stosując frame.setBounds(100,100,100,100)
        frame.setResizable(true); // Odpowiada z amozliść powiększania i zmniejszania ramki, domyślnie jest zawsze na true.
        frame.setIconImage(Toolkit.getDefaultToolkit().getImage("kurs.jpg")); //Ustawienie ikonki w lewym górnym rogu na zdjęcie wybrane przez nas. 
        
        
        
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Dodajemy aby po zamknięciu okna zamykała się również aplikacja, bez tego aplikacja będzie pracowała w tle
        // frame.setDefaultCloseOperation(3); - mozna również użyć formuły z komentarza będzie równoznaczne z powyższym
        frame.setVisible(true); // Nalezy dodac aby ramka była wgl widoczna w programie
    }
    public static void main(String[] args) {
        new Pierwszy_Projekt_Java_Ramka();
    }
    
}