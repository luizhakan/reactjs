function BotaoLink({ url, titulo }: { url: string; titulo: string }) {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          window.location.href = url;
        }}
      >
        {titulo}
      </button>
    </div>
  );
}

export default BotaoLink;
