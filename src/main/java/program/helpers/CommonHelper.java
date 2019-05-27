package program.helpers;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CommonHelper {

    public String removeUrl(String s){
        Pattern pattern = Pattern.compile("((https?|ftp|gopher|telnet|file|Unsure|http):((//)|(\\\\))+[\\w\\d:#@%/;$()~_?\\+-=\\\\\\.&]*)");
        Matcher matcher = pattern.matcher(s);
        String newString = matcher.replaceAll("");
        newString.trim();
        return newString;
    }
}
