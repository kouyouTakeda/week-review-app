import type React from 'react';
import './Edit.scss';
import { useState } from 'react';

// 後でインポートにする
type review = {
  storyNumber: number;
  data: string;
};

type Props = {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  review: review;
};

type formData = {
  title: string;
  data: string;
  tags: string[];
};

const Edit: React.FC<Props> = ({ setIsEdit, review }) => {
  const [formData, setFormData] = useState<formData>({
    title: '',
    data: review.data,
    tags: [],
  });

  return (
    <div
      className="overlay"
      aria-hidden="true"
      onClick={(e) => {
        e.target === e.currentTarget && setIsEdit(false);
      }}
    >
      <div className="edit">
        <form>
          <label htmlFor="title">
            <p>title</p>
          </label>
          <input type="text" id="title" placeholder="title" />

          <label htmlFor="review">
            <p>感想</p>
          </label>
          <textarea
            id="review"
            placeholder="感想"
            value={formData.data}
            onChange={(e) => {
              setFormData({ ...formData, data: e.target.value });
            }}
          ></textarea>
        </form>

        <div className="tag-group">
          <div className="tag-input">
            <label>
              <h3>tags</h3>
              <input type="text" placeholder=" " />
            </label>
            <div className="tag-predict">
              <ul>
                <li>tag</li>
                <li>tag</li>
                <li>tag</li>
                <li>tag</li>
                <li>tag</li>
                <li>tag</li>
                <li>tag</li>
                <li>tag</li>
                <li>tag</li>
                <li>tag</li>
                <li>tag</li>
                <li>tag</li>
              </ul>
            </div>
          </div>

          <div className="tags">
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
            <span className="tag">tag</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
