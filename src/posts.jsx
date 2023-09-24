
import { Card } from "./components/cards";

export const Posts = ({ images }) => {
    return (
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-4 gap-4 content-start">
            {images.map((image, index) => (
              <Card
                data = {image}

              />
            ))}
          </div>
        </div>
      </div>
    );
};
