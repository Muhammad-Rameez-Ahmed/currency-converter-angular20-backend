import express from "express";
import cors from 'cors';
import currencyRoutes from "../src/routes/currency.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/currency", currencyRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});


// Only start standalone server in dev mode
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
