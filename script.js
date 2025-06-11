const questions = [
  {
    "question": "You are deploying an application to Google Cloud. The application is part of a system. The application in Google Cloud must communicate over a private network with applications in a non-Google Cloud environment. The expected average throughput is 200 kbps. The business requires:\n✑ as close to 100% system availability as possible\n✑ cost optimization\nYou need to design the connectivity between the locations to meet the business requirements. \n\nWhat should you provision?",
    "options": [
      "An HA Cloud VPN gateway connected with two tunnels to an on-premises VPN gateway",
      "Two Classic Cloud VPN gateways connected to two on-premises VPN gateways Configure each Classic Cloud VPN gateway to have two tunnels, each connected to different on-premises VPN gateways",
      "Two HA Cloud VPN gateways connected to two on-premises VPN gateways Configure each HA Cloud VPN gateway to have two tunnels, each connected to different on-premises VPN gateways",
      "A single Cloud VPN gateway connected to an on-premises VPN gateway"
    ],
    "answer": [
      "An HA Cloud VPN gateway connected with two tunnels to an on-premises VPN gateway"
    ],
    "multiple": false
  },
  {
    "question": "Your company has an application running on App Engine that allows users to upload music files and share them with other people. You want to allow users to upload files directly into Cloud Storage from their browser session. The payload should not be passed through the backend. \n\nWhat should you do?",
    "options": [
      "1. Set a CORS configuration in the target Cloud Storage bucket where the base URL of the App Engine application is an allowed origin.\n     2. Use the Cloud Storage Signed URL feature to generate a POST URL.",
      "1. Set a CORS configuration in the target Cloud Storage bucket where the base URL of the App Engine application is an allowed origin.\n     2. Assign the Cloud Storage WRITER role to users who upload files.",
      "1. Use the Cloud Storage Signed URL feature to generate a POST URL.\n     2. Use App Engine default credentials to sign requests against Cloud Storage.",
      "1. Assign the Cloud Storage WRITER role to users who upload files.\n     2. Use App Engine default credentials to sign requests against Cloud Storage."
    ],
    "answer": [
      "1. Set a CORS configuration in the target Cloud Storage bucket where the base URL of the App Engine application is an allowed origin.\n     2. Use the Cloud Storage Signed URL feature to generate a POST URL."
    ],
    "multiple": false
  },
  {
    "question": "You are configuring the cloud network architecture for a newly created project in Google Cloud that will host applications in Compute Engine. Compute Engine virtual machine instances will be created in two different subnets (sub-a and sub-b) within a single region:\n• Instances in sub-a will have public IP addresses.\n• Instances in sub-b will have only private IP addresses.\n\nTo download updated packages, instances must connect to a public repository outside the boundaries of Google Cloud. You need to allow sub-b to access the external repository. \n\nWhat should you do?",
    "options": [
      "Enable Private Google Access on sub-b.",
      "Configure Cloud NAT and select sub-b in the NAT mapping section.",
      "Configure a bastion host instance in sub-a to connect to instances in sub-b.",
      "Enable Identity-Aware Proxy for TCP forwarding for instances in sub-b."
    ],
    "answer": [
      "Configure Cloud NAT and select sub-b in the NAT mapping section."
    ],
    "multiple": false
  },
  {
    "question": "Your company is planning to migrate their Windows Server 2022 from their on-premises data center to Google Cloud. You need to bring the licenses that are currently in use in on-premises virtual machines into the target cloud environment. \n\nWhat should you do?",
    "options": [
      "1. Create an image of the on-premises virtual machines and upload into Cloud Storage.\n     2. Import the image as a virtual disk on Compute Engine.",
      "1. Create standard instances on Compute Engine.\n     2. Select as the OS the same Microsoft Windows version that is currently in use in the on-premises environment.",
      "1. Create an image of the on-premises virtual machine.\n     2. Import the image as a virtual disk on Compute Engine.\n     3. Create a standard instance on Compute Engine, selecting as the OS the same Microsoft Windows version that is currently in use in the on-premises environment.\n     4. Attach a data disk that includes data that matches the created image.",
      "1. Create an image of the on-premises virtual machines.\n     2. Import the image as a virtual disk on Compute Engine using --os=windows-2022-dc-v.\n     3. Create a sole-tenancy instance on Compute Engine that uses the imported disk as a boot disk."
    ],
    "answer": [
      "1. Create an image of the on-premises virtual machines.\n     2. Import the image as a virtual disk on Compute Engine using --os=windows-2022-dc-v.\n     3. Create a sole-tenancy instance on Compute Engine that uses the imported disk as a boot disk."
    ],
    "multiple": false
  },
  {
    "question": "You are deploying an application to Google Cloud. The application is part of a system. The application in Google Cloud must communicate over a private network with applications in a non-Google Cloud environment. The expected average throughput is 200 kbps. The business requires:\n\n• 99.99% system availability\n• cost optimization\n\nYou need to design the connectivity between the locations to meet the business requirements. \n\nWhat should you provision?",
    "options": [
      "An HA Cloud VPN gateway connected with two tunnels to an on-premises VPN gateway.",
      "A Classic Cloud VPN gateway connected with two tunnels to an on-premises VPN gateway.",
      "Two HA Cloud VPN gateways connected to two on-premises VPN gateways. Configure each HA Cloud VPN gateway to have two tunnels, each connected to different on-premises VPN gateways.",
      "A Classic Cloud VPN gateway connected with one tunnel to an on-premises VPN gateway."
    ],
    "answer": [
      "An HA Cloud VPN gateway connected with two tunnels to an on-premises VPN gateway."
    ],
    "multiple": false
  },
  {
    "question": "Your company wants to migrate their 10-TB on-premises database export into Cloud Storage. You want to minimize the time it takes to complete this activity and the overall cost. The bandwidth between the on-premises environment and Google Cloud is 1 Gbps. You want to follow Google-recommended practices.\n\nWhat should you do?",
    "options": [
      "Develop a Dataflow job to read data directly from the database and write it into Cloud Storage.",
      "Use the Data Transfer appliance to perform an offline migration.",
      "Use a commercial partner ETL solution to extract the data from the on-premises database and upload it into Cloud Storage.",
      "Upload the data with gcloud storage cp."
    ],
    "answer": [
      "Upload the data with gcloud storage cp."
    ],
    "multiple": false
  },
  {
    "question": "You are working at a financial institution that stores mortgage loan approval documents on Cloud Storage. Any change to these approval documents must be uploaded as a separate approval file. You need to ensure that these documents cannot be deleted or overwritten for the next 5 years.\n\nWhat should you do?",
    "options": [
      "Create a retention policy on the bucket for the duration of 5 years. Create a lock on the retention policy.",
      "Create a retention policy organizational constraint constraints/storage.retentionPolicySeconds at the organization level. Set the duration to 5 years.",
      "Use a customer-managed key for the encryption of the bucket. Rotate the key after 5 years.",
      "Create a retention policy organizational constraint constraints/storage.retentionPolicySeconds at the project level. Set the duration to 5 years."
    ],
    "answer": [
      "Create a retention policy on the bucket for the duration of 5 years. Create a lock on the retention policy."
    ],
    "multiple": false
  },
  {
    "question": "Your company has decided to make a major revision of their API in order to create better experiences for their developers. They need to keep the old version of the API available and deployable, while allowing new customers and testers to try out the new API. They want to keep the same SSL and DNS records in place to serve both APIs.\n\nWhat should they do?",
    "options": [
      "Configure a new load balancer for the new version of the API",
      "Reconfigure old clients to use a new endpoint for the new API",
      "Have the old API forward traffic to the new API based on the path",
      "Use separate backend pools for each API path behind the load balancer"
    ],
    "answer": [
      "Use separate backend pools for each API path behind the load balancer"
    ],
    "multiple": false
  },
  {
    "question": "You have a Compute Engine application that you want to autoscale when total memory usage exceeds 80%. You have installed the Cloud Monitoring agent and configured the autoscaling policy as follows:\n\nhttps://img.examtopics.com/professional-cloud-architect/image1.png\n\nYou observe that the application does not scale under high load. You want to resolve this. What should you do?",
    "options": [
      "Change the Target type to DELTA_PER_MINUTE.",
      "Change the Metric identifier to agent.googleapis.com/memory/bytes_used.",
      "Change the filter to metric.label.state = ‘used’.",
      "Change the filter to metric.label.state = ‘free’ and the Target utilization to 20."
    ],
    "answer": [
      "Change the filter to metric.label.state = ‘used’."
    ],
    "multiple": false
  },
  {
    "question": "Your company has a Google Cloud project that uses BigOuery for data warehousing. The VPN tunnel between the on-premises environment and Google Cloud is configured with Cloud VPN. Your security team wants to avoid data exfiltration by malicious insiders, compromised code, and accidental oversharing.\n\nWhat should you do?",
    "options": [
      "Configure Private Service Connect.",
      "Configure VPC Service Controls and configure Private Google Access for on-promises hosts.",
      "Create a service account, grant the BigQuery JobUser role and Storage Object Viewer role to the service account, and remove all other Identity and Access Management (IAM) access from the project.",
      "Configure Private Google Access."
    ],
    "answer": [
      "Configure VPC Service Controls and configure Private Google Access for on-promises hosts."
    ],
    "multiple": false
  },
];

questions.sort(() => Math.random() - 0.5);


let currentQuestion = 0;
let score = 0;
let showingFeedback = false;
let quizStartTime = new Date();

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const finishBtn = document.getElementById('finishTestBtn');



function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function updateProgress() {
  const progressPercent = ((currentQuestion) / questions.length) * 100;
  document.getElementById('progressBar').style.width = `${progressPercent}%`;
  document.getElementById('progressText').textContent = `Question ${currentQuestion + 1}`;
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  const shuffledOptions = shuffleArray([...q.options]);
  
  const inputType = q.multiple ? "checkbox" : "radio";

    shuffledOptions.forEach(option => {
      const li = document.createElement("li");
      li.innerHTML = `
        <label class="option">
          <input type="${inputType}" name="option" value="${option}">
          <span>${option}</span>
        </label>`;
      optionsEl.appendChild(li);
    });

  // ✅ Now add the `.selected` logic AFTER options are rendered
  optionsEl.querySelectorAll("input[type='radio']").forEach(input => {
    input.addEventListener('change', () => {
      document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
      input.parentElement.classList.add('selected');
    });
  });

  resultEl.innerHTML = "";
  nextBtn.textContent = "Submit";
  showingFeedback = false;
  updateProgress();

  if (currentQuestion === questions.length - 1) {
    finishBtn.style.display = "block";
  } else {
    finishBtn.style.display = "none";
  }

    if (currentQuestion >= 1) {
      finishBtn.style.display = "block";
    } else {
      finishBtn.style.display = "none";
    }
}


let totalTimeInSeconds = 90 * 60; // 1 hour 30 minutes = 5400 seconds
const timerEl = document.getElementById("timer");

function updateTimerDisplay() {
  const hours = Math.floor(totalTimeInSeconds / 3600);
  const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
  const seconds = totalTimeInSeconds % 60;

  let timeParts = [];

  if (hours > 0) timeParts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  if (minutes > 0 || hours > 0) timeParts.push(`${minutes} min${minutes !== 1 ? 's' : ''}`);
  timeParts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);

  timerEl.textContent = `Time Remaining: ${timeParts.join(', ')}`;
}


function startTimer() {
  countdownInterval = setInterval(() => {
    totalTimeInSeconds--;
    updateTimerDisplay();

    if (totalTimeInSeconds <= 0) {
      clearInterval(countdownInterval);
      alert("Time's up! Submitting your quiz.");
      showResult();
    }
  }, 1000);
}



let countdownInterval = setInterval(() => {
  totalTimeInSeconds--;
  updateTimerDisplay();

  if (totalTimeInSeconds <= 0) {
    clearInterval(countdownInterval);
    alert("Time's up! Submitting your quiz.");
    showResult();
  }
}, 1000);

updateTimerDisplay(); // show initial value



nextBtn.addEventListener("click", () => {
  const currentQ = questions[currentQuestion];
  const selectedInputs = Array.from(document.querySelectorAll("input[name='option']:checked"));
  const correctAnswers = currentQ.answer;

  if (!showingFeedback) {
    if (selectedInputs.length === 0) return alert("Please select at least one option.");

    const selectedValues = selectedInputs.map(input => input.value);
    const isCorrect = correctAnswers.length === selectedValues.length &&
                      correctAnswers.every(ans => selectedValues.includes(ans));

    // Disable all inputs
    document.querySelectorAll("input[name='option']").forEach(input => input.disabled = true);

    // Highlight correct and incorrect
    document.querySelectorAll("input[name='option']").forEach(input => {
      const parentLabel = input.parentElement;
      if (correctAnswers.includes(input.value)) {
        parentLabel.classList.add("correct");
      }
      if (input.checked && !correctAnswers.includes(input.value)) {
        parentLabel.classList.add("incorrect");
      }
    });

    // Feedback
    if (isCorrect) {
      score++;
      resultEl.innerHTML = `<p style="color: green;">✅ Correct!</p>`;
    } else {
      resultEl.innerHTML = `<p style="color: red;">❌ Incorrect.</p>
                            <p>Correct Answer: <strong>${correctAnswers.join(", ")}</strong></p>`;
    }

    nextBtn.textContent = currentQuestion < questions.length - 1 ? "Next Question" : "See Result";
    showingFeedback = true;

  } else {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
});

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const parts = [];
  if (h > 0) parts.push(`${h}h`);
  if (m > 0 || h > 0) parts.push(`${m}m`);
  parts.push(`${s}s`);

  return parts.join(' ');
}


// Save score to history in localStorage
function saveScoreToHistory(score, total) {
  const endTime = new Date();
  const durationInSeconds = Math.floor((endTime - quizStartTime) / 1000);
  const duration = formatDuration(durationInSeconds);

  const scoreRecord = {
    score,
    total,
    date: endTime.toLocaleString(),
    duration
  };

  let history = JSON.parse(localStorage.getItem('quizScoreHistory')) || [];
  history.push(scoreRecord);
  localStorage.setItem('quizScoreHistory', JSON.stringify(history));
}

// Show full history above quiz
function displayScoreHistory() {
  const container = document.querySelector(".container");
  let history = JSON.parse(localStorage.getItem('quizScoreHistory')) || [];

  // Remove existing history display if any
  const existingHistory = document.getElementById('scoreHistory');
  if (existingHistory) existingHistory.remove();

  if (history.length === 0) return;

  // Create history table
  const historyDiv = document.createElement('div');
  historyDiv.id = 'scoreHistory';
  historyDiv.innerHTML = `
    <h3>Score History</h3>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th>#</th>
          <th>Score</th>
          <th>Time Taken</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        ${history.map((item, idx) => `
          <tr>
            <td>${idx + 1}</td>
            <td>${item.score} / ${item.total}</td>
            <td>${item.duration || '-'}</td>
            <td>${item.date}</td>
          </tr>`).join('')}
      </tbody>
    </table>
    <button id="clearHistoryBtn" style="margin-top: 10px;">Clear History</button>
    <hr>
  `;

  container.insertBefore(historyDiv, document.getElementById("quiz"));

  // Add clear history button event listener
  document.getElementById('clearHistoryBtn').addEventListener('click', () => {
    if (confirm("Are you sure you want to clear your score history?")) {
      localStorage.removeItem('quizScoreHistory');
      displayScoreHistory(); // Remove history display
    }
  });
}

// Updated showResult to save score and show history
function showResult() {
  saveScoreToHistory(score, questions.length);
  document.getElementById("quiz").style.display = "none";
  document.getElementById("finalResult").style.display = "block";
  document.getElementById("finalResult").innerHTML = `
      <h2>Your Score: ${score}/${questions.length}</h2>
      <button id="restartQuizBtn" style="margin-top: 16px;">Restart Quiz</button>
`;
  finishBtn.style.display = "none";

  displayScoreHistory();

  // ✅ Restart logic with timer reset
  document.getElementById("restartQuizBtn").addEventListener("click", () => {
    // Reset quiz state
    score = 0;
    currentQuestion = 0;
    showingFeedback = false;
    quizStartTime = new Date();

    // Reset timer
    clearInterval(countdownInterval);
    totalTimeInSeconds = 90 * 60; // 1 hour 30 minutes
    updateTimerDisplay();
    startTimer(); // start a new countdown

    // Re-shuffle and reload quiz
    questions.sort(() => Math.random() - 0.5);
    document.getElementById("quiz").style.display = "block";
    document.getElementById("finalResult").style.display = "none";
    loadQuestion();
  });
}

// Initial call to show history on page load
// displayScoreHistory(); 

finishBtn.style.display = "none"; // start hidden

startTimer();

// Initial call to load first question
loadQuestion();
