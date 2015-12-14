
package com.example.michael.magicmirrorapp; 
 
import java.io.Serializable; 
 
public class Task implements Serializable { 
    String name; 
    String time; 
 
    public Task(String nameIn, String timeIn){ 
        this.name = nameIn; 
        this.time = timeIn; 
    } 
} 
