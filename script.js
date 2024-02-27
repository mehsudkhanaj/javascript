function calculateTotalTime(timeLogs) {
    let totalTime = 0;
  
    for (let i = 0; i < timeLogs.length; i++) {
      const startTime = new Date(timeLogs[i].start);
      const endTime = new Date(timeLogs[i].end);
  
      // Calculate the time duration for each time log
      const timeDuration = new Date(endTime.getTime() - startTime.getTime());
  
      // Add the time duration to the total time
      totalTime += timeDuration.getTime();
    }
  
    // Convert the total time in milliseconds to hours, minutes, and seconds
    const hours = Math.floor(totalTime / (1000 * 60 * 60));
    const minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalTime % (1000 * 60)) / 1000);
  
    // Format the total time as a string
    const totalTimeString = `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  
    console.log(`Total time taken by the employee to complete the task: ${totalTimeString}`);
  }
  
  // Example usage:
  const timeLogs = [
    { start: '2023-03-22T12:00:00', end: '2023-03-22T13:00:00' },
    { start: '2023-03-22T14:00:00', end: '2023-03-22T14:00:00' },
    { start: '2023-03-23T11:00:00', end: '2023-03-23T13:00:00' },
  ];
  
  calculateTotalTime(timeLogs);
  <!-- <!DOCTYPE html>
<html>

<head>
    <title>Time Tracking</title>
</head>

<body>
    <h1>Time Tracking for Task A</h1>
    <form id="timeLogForm">
        <label for="startTime">Start Time:</label>
        <input type="time" id="startTime" name="startTime" required>
        <br>
        <label for="endTime">End Time:</label>
        <input type="time" id="endTime" name="endTime" required>
        <br>
        <button type="submit">Add Time Log</button>
    </form>
    <h2>Time Logs</h2>
    <table id="timeLogsTable" cellpadding='15px' border="2px solid purple">
        <thead>
            <tr>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    <script>
        // Example time logs
        const timeLogs = [
            {start: '10:00:00', end: '13:00:00'},
            {start: '14:00:00', end: '19:00:00'},
        ];

        // Populate the time logs table with the example time logs
        const timeLogsTable = document.getElementById('timeLogsTable');
        for (let i = 0; i < timeLogs.length; i++) {
            const row = timeLogsTable.insertRow();
            const startCell = row.insertCell();
            const endCell = row.insertCell();
            const durationCell = row.insertCell();
            startCell.textContent = formatTime(timeLogs[i].start);
            endCell.textContent = formatTime(timeLogs[i].end);
            durationCell.textContent = calculateTimeDuration(timeLogs[i].start, timeLogs[i].end);
        }

        // Format a time string in 12-hour format
        function formatTime(timeString) {
            const [hours, minutes, seconds] = timeString.split(':');
            const hour = parseInt(hours, 10);
            const period = hour < 12 ? 'AM' : 'PM';
            const formattedHours = hour % 12 || 12;
            return `${formattedHours}:${minutes}:${seconds} ${period}`;
        }

        // Calculate the time duration between two time strings
        function calculateTimeDuration(start, end) {
            const startDate = new Date(0, 0, 0, ...start.split(':'));
            const endDate = new Date(0, 0, 0, ...end.split(':'));
            const timeDiff = endDate - startDate;
            const hours = Math.floor(timeDiff / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            return `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
        }

        // Handle form submission
        const timeLogForm = document.getElementById('timeLogForm');
        timeLogForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const startTime = timeLogForm.elements['startTime'].value;
            const endTime = timeLogForm.elements['endTime'].value;
            const timeLog = {start: startTime, end: endTime};
            timeLogs.push(timeLog);

            const row = timeLogsTable.insertRow();
            const startCell = row.insertCell();
            const endCell = row.insertCell();
            const durationCell = row.insertCell();
            startCell.textContent = formatTime(startTime);
            endCell.textContent = formatTime(endTime);
            durationCell.textContent = calculateTimeDuration(startTime, endTime);
        });
    </script>
</body>

</html>

/*The above code working properly. My instruction is that i dont want any manual entry. I need three button which is
start,pause and completed task button. When employee press the start button it start the time calculation and store the
data locally. when the user press the pause button it stop the time the calculation and the task should be paused. And
when again the user press the button of start the time start again from where is stopped and the data should be stored
in a local storage. and when the employee click on the button of completed task it shows the task is completed and total
time taken by the employee on that task.
*/ -->
