import "./capsule.css";

export const Capsule = ({ capsule }) => {
  return (
    <div className="capsule">
      <div className="title">{capsule[0].value}</div>
      {capsule.map((item, index) => (
        <>
          {index !== 0 && (
            <div className="capsuleInfo">
              <div className="key">{item.key}</div>
              <div className="value">{item.value}</div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};
