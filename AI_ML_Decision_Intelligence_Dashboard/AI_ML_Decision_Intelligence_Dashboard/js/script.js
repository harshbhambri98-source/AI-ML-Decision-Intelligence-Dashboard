
const ctx = document.getElementById('aiChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Accuracy',
      data: [60, 70, 75, 90, 95]
    }]
  }
});

function sendMessage(){
  const msg = document.getElementById("message").value;
  const chat = document.getElementById("chat");

  chat.innerHTML += `<p><strong>You:</strong> ${msg}</p>`;
  chat.innerHTML += `<p><strong>AI:</strong> Prediction model optimized successfully.</p>`;
}
