package com.example.michael.magicmirrorapp; 
 
import android.app.AlertDialog; 
import android.content.Context; 
import android.content.DialogInterface; 
import android.os.Bundle; 
import android.support.v7.app.AppCompatActivity; 
import android.view.LayoutInflater; 
import android.view.View; 
import android.widget.Button; 
import android.widget.EditText; 
import android.widget.ListView; 
 
import org.json.JSONArray; 
 
import java.util.ArrayList; 
 
 
public class MainActivity extends AppCompatActivity { 
 
 
    final Context context = this; 
    ListView listView; 
    Button addTask; 
    EditText result; 
    ArrayList<Task> arrayOfTasks; 
    TasksAdapter adapter; 
 
 
    String myJSON; 
 
 
    JSONArray peoples = null; 
 
 
    Button btnlogin; 
 
    String filename = "tasks_file"; 
 
    @Override 
    protected void onCreate(Bundle savedInstanceState) { 
        super.onCreate(savedInstanceState); 
        setContentView(R.layout.activity_main); 
        arrayOfTasks = new ArrayList<Task>(); 
 
        listView = (ListView) findViewById(R.id.taskList); 
        addTask = (Button) findViewById(R.id.buttonAdd); 
        addTask.setOnClickListener(new View.OnClickListener() { 
 
            @Override 
            public void onClick(View arg0) { 
 
                // get prompts.xml view 
                LayoutInflater li = LayoutInflater.from(context); 
                View promptsView = li.inflate(R.layout.prompt, null); 
 
                AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder( 
                        context); 
 
                // set prompts.xml to alertdialog builder 
                alertDialogBuilder.setView(promptsView); 
 
                final EditText inputName = (EditText) promptsView 
                        .findViewById(R.id.editTextTaskName); 
 
                final EditText inputTime = (EditText) promptsView 
                        .findViewById(R.id.editTextTaskTime); 
 
                // set dialog message 
                alertDialogBuilder 
                        .setCancelable(false) 
                        .setPositiveButton("OK", 
                                new DialogInterface.OnClickListener() { 
                                    public void onClick(DialogInterface dialog, int id) { 
                                        // get user input and set it to result 
                                        // edit text 
                                        String taskName; 
                                        String taskTime; 
 
                                        if (inputName.getText().toString().length() > 30) { 
                                            taskName = inputName.getText().toString().substring(0, 30); 
                                        } else { 
                                            taskName = inputName.getText().toString(); 
                                        } 
 
                                        if (inputTime.getText().toString().length() > 3) { 
                                            taskTime = inputTime.getText().toString().substring(0, 3); 
                                        } else { 
                                            taskTime = inputTime.getText().toString(); 
                                        } 
 
 
                                        Task newTask = new Task(taskName, taskTime); 
                                        adapter.add(newTask); 
                                    } 
                                }) 
                        .setNegativeButton("Cancel", 
                                new DialogInterface.OnClickListener() { 
                                    public void onClick(DialogInterface dialog, int id) { 
                                        dialog.cancel(); 
                                    } 
                                }); 
 
                // create alert dialog 
                AlertDialog alertDialog = alertDialogBuilder.create(); 
 
                // show it 
                alertDialog.show(); 
 
            } 
        }); 
 
        arrayOfTasks = new ArrayList<Task>(); 
        adapter = new TasksAdapter(this, arrayOfTasks); 
        listView.setAdapter(adapter); 
 
    } 
 
} 
