const { experimental_createMCPClient, tool } = require("ai");
const { z } = require("zod");
const { getProducts } = require("../productService.js");

const fetchProducts = tool({
  description: "Get all products from the database",
  parameters: z.object({}),
  execute: async () => {
    const response = await fetch("http://localhost:3000/api/v1/products");
    const products = await response.json();
    return products;
  },
});

const recommendProduct = tool({
  description:
    "Use this tool to recommend a specific product from the database",
  parameters: z.object({
    _id: z.string().describe("The _id of the product to recommend"),
  }),
  execute: async ({ _id }) => {
    const response = await fetch(
      `http://localhost:3000/api/v1/products/${_id}`
    );
    const product = await response.json();
    return product;
  },
});

let mcpClient;
let tools;

async function createMcpClient() {
  mcpClient = await experimental_createMCPClient({
    transport: {
      type: "sse",
      url: "http://localhost:3010/sse",
    },
    name: "OTC products service",
  });
  return mcpClient;
}

async function getTools() {
  if (!mcpClient || !tools) {
    mcpClient = await createMcpClient();
    tools = await mcpClient.tools();
  }
  return {
    ...tools,
    recommendProduct,
    fetchProducts,
  };
}

module.exports = getTools;
