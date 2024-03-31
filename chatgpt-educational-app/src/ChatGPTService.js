import axios from 'axios';

const chatGPTAPIEndpoint = 'https://api.openai.com/v1/chat/completions'; // Adjust if needed

export const getChatGPTResponse = async (topic) => {
  try {
    const response = await axios.post(
      chatGPTAPIEndpoint,
      {
        model: "gpt-4-0125-preview", // Or another model you have access to
        messages: [{ role: "user", content: topic }],
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching data from ChatGPT:', error);
    throw error;
  }
};

// Assume the rest of the file remains the same as previously defined

export const getFollowUpResponse = async (topic, messages) => {
    try {
      const response = await axios.post(
        chatGPTAPIEndpoint,
        {
          model: "gpt-4-0125-preview",
          messages: [...messages, { role: "user", content: topic }],
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching follow-up data from ChatGPT:', error);
      throw error;
    }
  };
  