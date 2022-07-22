const card = function (props) {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">{props.version}</div>
        </div>
      </div>
    </div>
  );
};

export default card;
