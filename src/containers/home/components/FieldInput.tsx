import React from "react";

const FieldInput = ({ schema, name, onChange }) => {
  console.log(schema, name);
  const cols = 40;

  const getRows = (maximum) => {
    return Math.floor(maximum / cols);
  };
  return (
    <div>
      {schema.type === "number" && (
        <div>
          <span>
            <input
              type="text"
              placeholder={name}
              maxLength={schema.maximum.toString().length}
              onChange={(e) => onChange(name, e.target.value)}
            />
          </span>
          {schema.hasOwnProperty("error") && schema.error && (
            <span>&times; - {schema.error}</span>
          )}
        </div>
      )}
      {schema.type === "string" && schema.max_length > 40 && (
        <div>
          <span>
            <textarea
              cols={cols}
              rows={getRows(schema.max_length)}
              maxLength={schema.max_length}
              placeholder={name}
              onChange={(e) => onChange(name, e.target.value)}
            />
          </span>
        </div>
      )}
      {schema.type === "string" && schema.max_length <= 40 && (
        <div>
          <span>
            <input
              type="text"
              maxLength={schema.max_length}
              placeholder={name}
              onChange={(e) => onChange(name, e.target.value)}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default FieldInput;
