import { nanoid } from "nanoid";
import { create } from "zustand";

interface StoreState {
  amount: number | number[];
  dataTypes: { id: string; value: string; type: string }[];
  answer: { role: string; content: string };
  loading: boolean;
  fetcher: (data: { dataOf: string }) => void;
  dataTypeAdd: (type: { value: string; type: string }) => void;
  dataTypeDelete: (id: string) => void;
  handleAmount: (amount: number | number[]) => void;
}

const useStore = create<StoreState>()((set, get) => ({
  amount: 3,
  dataTypes: [
    { id: "asdSa", value: "id", type: "string" },
    { id: "oIhYa", value: "name", type: "string" },
  ],
  answer: { role: "", content: "" },
  loading: false,

  fetcher: async (data) => {
    try {
      set({ loading: true });
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          dataTypes: get().dataTypes,
          amount: get().amount,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        set({ answer: result.answer });
      } else {
        console.error("Bad Response");
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
  dataTypeAdd: (type) => {
    set((state) => ({
      dataTypes: [...state.dataTypes, { id: nanoid(6), ...type }],
    }));
  },
  dataTypeDelete: (id) => {
    set((state) => ({
      dataTypes: state.dataTypes.filter((type) => type.id !== id),
    }));
  },
  handleAmount: (amount) => {
    set({ amount });
  },
}));

export default useStore;
