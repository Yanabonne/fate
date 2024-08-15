type TTooltipProps = {
  active: boolean;
  payload: [];
  label: string;
};

export const CustomTooltip = ({ active, payload, label }: TTooltipProps) => {
  if (active && payload?.length) {
    return (
      <div className="cycles__tooltip">
        <span>{label}</span>
        <br />
        {payload.map((ele: { name: string; value: number }, index: number) => (
          <>
            <small key={index} className="text-secondary">
              {ele.name}: {ele.value}
            </small>
            <br />
          </>
        ))}
      </div>
    );
  }
  return null;
};
