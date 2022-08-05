import "./styles.scss";

type Props = {
  rows: number;
  columns: number;
  children: JSX.Element[] | Array<Object> | any;
};

const DefaultList = ({ rows, columns, children }: Props) => {
  let transformedColumns = "";
  for (let i = 0; i < columns; i++) {
    transformedColumns += "1fr ";
  }
  console.log("columns ::: ", transformedColumns);

  let transformedRows = "";
  for (let i = 0; i < rows; i++) {
    transformedRows += "1fr ";
  }
  console.log("rows ::: ", transformedRows);

  return (
    <>
      <ul
        className="DefaultList"
        style={{
          gridTemplateColumns: transformedColumns,
          gridTemplateRows: transformedRows,
        }}
      >
        {children.length > 0
          ? children.map((element: any, index: number) => {
              return (
                <li key={index} className="DefaultList__item">
                  {element}
                </li>
              );
            })
          : ""}
      </ul>
    </>
  );
};
export default DefaultList;

// Quantas colunas
//  Quantas rows
