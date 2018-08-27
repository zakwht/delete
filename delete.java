import java.io.*;

public class delete {

    public static void main(String[] args) {
        File f1 = new File("delete.java");
        File f2 = new File("delete.class");
        f1.delete();
        f2.delete();
    }

}
