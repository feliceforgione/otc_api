const errorTemplate = require("../../templates/errorTemplate.js");
const messages = require("../../messages/messages.js");

const { openai } = require("@ai-sdk/openai");
const { streamText, tool } = require("ai");
const getTools = require("./ai-tools.js");
const { z } = require("zod");
const { fetchProducts } = require("./ai-tools.js");

const SYSTEM_PROMPT = `You are an AI for a over the counter medicine store. 
  Use the fetchProducts tool to only get all products from the database. Based on this list, get the "_id" of the product you want to recommend. Then use the recommendProduct tool to get details on the product you want to recommend. Make sure the "_id" is from the list you got from the fetchProducts tool. Just give the name of the product
  
  Use the "OTC products service" MCP server to answer any product category questions. Do not include images in your answers.
  `;

let tools;

const aiStreamText = async (req, res) => {
  try {
    if (!tools) {
      tools = await getTools();
    }

    const { messages } = await req.body;

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      messages,
      system: SYSTEM_PROMPT,
      maxSteps: 20,
      tools,
    });

    return result.pipeDataStreamToResponse(res);
  } catch (err) {
    errorTemplate(res, err, err.message, 501);
  }
};

module.exports = { aiStreamText };
