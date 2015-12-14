package com.example.michael.magicmirrorapp; 
 
import android.annotation.SuppressLint; 
import android.os.StrictMode; 
import android.util.Log; 
 
import java.sql.Connection; 
import java.sql.DriverManager; 
import java.sql.SQLException; 
 
public class ConnectionClass { 
 
 
    String ip = "192.168.1.26"; 
 
    String classs = "net.sourceforge.jtds.jdbc.Driver"; 
    String db = "magic_mirror"; 
    String un = "root"; 
    String password = ""; 
 
    @SuppressLint("NewApi") 
    public Connection CONN() { 
        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder() 
                .permitAll().build(); 
        StrictMode.setThreadPolicy(policy); 
        Connection conn = null; 
        String ConnURL = null; 
        try { 
            Class.forName(classs); 
            ConnURL = "jdbc:jtds:sqlserver://" + ip + ";" 
                    + "databaseName=" + db + ";user=" + un + ";password=" 
                    + password + ";"; 
            conn = DriverManager.getConnection(ConnURL); 
        } catch (SQLException se) { 
            Log.e("ERRO", se.getMessage()); 
        } catch (ClassNotFoundException e) { 
            Log.e("ERRO", e.getMessage()); 
        } catch (Exception e) { 
            Log.e("ERRO", e.getMessage()); 
        } 
        return conn; 
    } 
 
 
} 
