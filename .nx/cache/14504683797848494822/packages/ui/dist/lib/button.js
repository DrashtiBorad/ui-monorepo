import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ label, onClick }) => {
    return (_jsx("button", { onClick: onClick, style: {
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        }, children: label }));
};
