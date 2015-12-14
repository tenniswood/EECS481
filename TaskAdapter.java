
package com.example.michael.magicmirrorapp; 
 
import android.content.Context; 
import android.view.LayoutInflater; 
import android.view.View; 
import android.view.ViewGroup; 
import android.widget.ArrayAdapter; 
import android.widget.TextView; 
 
import java.util.ArrayList; 
 
public class TasksAdapter extends ArrayAdapter<Task> { 
    public TasksAdapter(Context context, ArrayList<Task> tasks) { 
        super(context, 0, tasks); 
    } 
 
    @Override 
    public View getView(int position, View convertView, ViewGroup parent) { 
        // Get the data item for this position 
        Task task = getItem(position); 
        // Check if an existing view is being reused, otherwise inflate the view 
        if (convertView == null) { 
            convertView = LayoutInflater.from(getContext()).inflate(R.layout.item_task, parent, false); 
        } 
        // Lookup view for data population 
        TextView taskName = (TextView) convertView.findViewById(R.id.taskName); 
        TextView taskTime = (TextView) convertView.findViewById(R.id.taskTime); 
        // Populate the data into the template view using the data object 
        taskName.setText(task.name); 
        taskTime.setText(task.time); 
        // Return the completed view to render on screen 
        return convertView; 
    } 
} 
