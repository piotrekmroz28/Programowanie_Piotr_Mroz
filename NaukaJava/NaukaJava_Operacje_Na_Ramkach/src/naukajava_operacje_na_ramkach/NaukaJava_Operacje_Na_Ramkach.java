package naukajava_operacje_na_ramkach;

import javax.swing.*;
import java.awt.*;

public class NaukaJava_Operacje_Na_Ramkach extends JFrame{

    public NaukaJava_Operacje_Na_Ramkach(){
        int szer = Toolkit.getDefaultToolkit().getScreenSize().width;
        int wys = Toolkit.getDefaultToolkit().getScreenSize().height;
        this.setSize(szer/2, wys/2);
        this.setLocation(szer/4, wys/4);
        
        
        this.setDefaultCloseOperation(3);
    }
    
    public static void main(String[] args) {
        new NaukaJava_Operacje_Na_Ramkach().setVisible(true);
    }
    
}
