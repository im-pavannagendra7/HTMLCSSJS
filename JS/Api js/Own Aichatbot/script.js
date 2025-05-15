const API_KEY = "AIzaSyCnlxZOdRYgjpXh9nUIFqfthg0qJUYMMQw";
async function fetchData ()
{
    const input = document.getElementById("inp").value
    const res = await fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					contents: [
						{
							parts: [{ text:`**Prompt for Designing a Professional AI Chatbot:**

---

**Objective:** Create a professional AI chatbot that provides clear, concise, and helpful responses to user inquiries while maintaining a friendly and engaging tone.

**Instructions:**

1. **Define the Purpose:**
   - Specify the primary function of the chatbot (e.g., customer support, information retrieval, appointment scheduling).
   - Identify the target audience and their typical questions or needs.

2. **Tone and Style:**
   - Use a professional yet approachable tone.
   - Ensure responses are clear and free of jargon, making them easily understandable to users.

3. **Response Structure:**
   - Start with a brief acknowledgment of the user's inquiry.
   - Provide a direct answer or solution, followed by additional context or explanation if necessary.
   - Offer further assistance or related information at the end of the response.

4. **Handling Complex Queries:**
   - If a query is too complex, break it down into smaller components and address each part sequentially.
   - Use bullet points or numbered lists for clarity when providing multi-step instructions.

5. **User Engagement:**
   - Incorporate questions to encourage user interaction (e.g., “Does this answer your question?”).
   - Offer options for users to explore further topics or ask follow-up questions.

6. **Error Handling:**
   - Prepare responses for scenarios where the chatbot does not understand a user’s request.
   - Politely ask for clarification or suggest alternative ways to phrase the question.

7. **Feedback Mechanism:**
   - Include a method for users to provide feedback on the chatbot’s performance.
   - Use this feedback to continuously improve responses and user experience.

8. **Testing and Iteration:**
   - Regularly test the chatbot with real users to gather insights and identify areas for improvement.
   - Iterate on the response templates based on user interactions and feedback.

**Example Interaction:**

- User: "How can I reset my password?"
- Chatbot Response: 
  "I can help you with that! To reset your password, please follow these steps:
   1. Go to the login page.
   2. Click on 'Forgot Password?'
   3. Enter your registered email address and follow the instructions sent to you.
   If you need help with anything else, feel free to ask!"

--- 

**End of Prompt**`+ input }],
						},
					],
				}),
			},
    )
    console.log(res)
    const data = await res.json()
	console.log(data.candidates[0].content.parts[0].text)
	displayData(data.candidates[0].content.parts[0].text)
}
document.getElementById('btn').addEventListener('click', fetchData)
function displayData (v)
{
    const h3 = document.createElement('h3');
    h3.textContent = v;
    document.getElementById("main").appendChild(h3)
}