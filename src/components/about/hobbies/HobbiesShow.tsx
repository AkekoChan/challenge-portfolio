import { useState } from "preact/hooks";
import Picture from "../../common/ui/Picture";
import HobbiesButton from "./HobbiesButton";

import { data } from "../../../data/HobbiesData.ts";

const HobbiesShow = () => {
  const [currentHobby, setCurrentHobby] = useState(0);

  const handleSelectHobby = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentHobby(Number(event.currentTarget.dataset.current));
  };

  return (
    <div class="flex flex-col gap-8 lg:flex-row lg:gap-12">
      <div class="flex flex-col gap-8 lg:max-w-3xl w-full">
        {data[currentHobby] && (
          <p class="font-lexend-exa">{data[currentHobby].description}</p>
        )}

        <ul class="flex flex-wrap gap-6 justify-center lg:justify-start">
          {data.map((hobby, index) => (
            <li>
              <HobbiesButton
                content={hobby.hobby}
                currentHobby={currentHobby}
                handleSelectHobby={handleSelectHobby}
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>{data[currentHobby] && <Picture {...data[currentHobby].img} />}</div>
    </div>
  );
};

export default HobbiesShow;
