import { useState } from "react";
import { nanoid } from "nanoid";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function Home() {
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dataKeys, setDataKeys] = useState([]);

  async function fetcher(data) {
    try {
      setLoading(true);
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, dataKeys }),
      });
      if (response.ok) {
        const result = await response.json();
        setAnswer(result);
      } else {
        console.error("Bad Response");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const data = Object.fromEntries(formData);
          fetcher(data);
        }}
      >
        <label htmlFor="persona">Data:</label>
        <input type="text" id="persona" name="persona" defaultValue="Dogs" />

        <button>submit</button>
      </form>
      <hr />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setDataKeys([
            ...dataKeys,
            {
              name: inputValue,
              type: event.target.elements.dataTypes.value,
              id: nanoid(6),
            },
          ]);
          setInputValue("");
        }}
      >
        <label>
          <input
            // This is called a controlled input.
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </label>
        <select id="dataTypes">
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="boolean">Boolean</option>
          <option value="undefined">Undefined</option>
          <option value="null">Null</option>
          <option value="symbol">Symbol</option>
        </select>
        <button type="submit">add</button>
      </form>
      <hr />

      <ul>
        {dataKeys.map((todo) => {
          return (
            <li key={todo.id}>
              <span>
                {todo.name} - {todo.type}
              </span>
            </li>
          );
        })}
      </ul>

      {loading ? (
        <p>loading..</p>
      ) : (
        <SyntaxHighlighter language="javascript">
          {answer?.answer.content}
        </SyntaxHighlighter>
      )}
    </>
  );
}
