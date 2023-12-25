const Key = ({ id }: { id: string }) => {
  return (
    <>
      <button key={id} id={id} className={`item-${id != "=" ? id : "equal"}`}>
        {id}
      </button>
    </>
  );
};

export default Key;
