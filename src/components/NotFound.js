/* NotFound component displayed when a recipe cannot be found
* Provides a way to navigate back to the previous page
*/
export const NotFound = ({ onBack }) => (
    <div className="recipe-container text-center">
      <h1>Recipe Not Found</h1>
      <button onClick={onBack} className="btn-primary">Go Back</button>
    </div>
  );