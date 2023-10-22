import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

type Props = {
  days: {
    start: string;
    end: string;
  };
  afternoonTime: {
    start: string;
    end: string;
  };
  eveningTime: {
    start: string;
    end: string;
  };
};

type TimeRangeType = {
  startTime: string;
  endTime: string;
};

const TimeRange = (props: TimeRangeType) => {
  return (
    <div className="flex justify-between">
      <p className="w-[72px] text-left">
        {props.startTime.split(" ")[0]}{" "}
        <span className="text-xs uppercase opacity-50">
          {props.startTime.split(" ")[1]}
        </span>
      </p>
      <ArrowLongRightIcon className="w-6 text-brand" />
      <p className="w-[72px] text-right">
        {props.endTime.split(" ")[0]}{" "}
        <span className="text-xs uppercase opacity-50">
          {props.endTime.split(" ")[1]}
        </span>
      </p>
    </div>
  );
};

const BusinessHours = (props: Props) => {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-2xl bg-darker p-4 shadow shadow-black">
      <p>
        {props.days.start} to {props.days.end}
      </p>
      <div className="flex flex-col">
        <TimeRange
          startTime={props.afternoonTime.start}
          endTime={props.afternoonTime.end}
        />
        <TimeRange
          startTime={props.eveningTime.start}
          endTime={props.eveningTime.end}
        />
      </div>
    </div>
  );
};

export default BusinessHours;
