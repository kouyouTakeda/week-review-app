import type React from 'react';
import './Edit.scss';

const Edit: React.FC = () => {
  return (
    <div className="overlay">
      <div className="edit">
        <form action="">
          <label htmlFor="title">
            <p>title</p>
          </label>
          <input type="text" id="title" placeholder="title" />

          <label htmlFor="review">
            <p>感想</p>
          </label>
          <textarea id="review" placeholder="感想"></textarea>
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
