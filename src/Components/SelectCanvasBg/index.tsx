const colors = ["#ff0000", "#ffffff", "#000000", "#008000", "#ffff00"];

const SelectCanvasBg = () => {

  return (
    <div className="flex flex-col gap-4">
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className="rounded-md w-6 h-6"
            style={{
              backgroundColor: color,
            }}
          />
        );
      })}
      <div>
        <input
          type="color"
          className="w-6 h-6 p-1"
        />
      </div>
    </div>
  );
};
export default SelectCanvasBg;
