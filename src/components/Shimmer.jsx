export const ShimmerCardContainer = ()=>{
    return <div className="w-1/5 max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-5 my-3 animate-pulse">
    <div className="p-3 text-center rounded-t-lg bg-gray-200 h-40 animate-shimmer"></div>
    <div className="px-5 pb-5">
      <div className="h-6 bg-gray-200 rounded mt-4 animate-shimmer"></div>
      <div className="h-4 bg-gray-200 rounded mt-2 animate-shimmer"></div>
      <div className="flex items-center mt-4">
        <div className="flex space-x-1">
          {Array(5)
            .fill('')
            .map((_, idx) => (
              <div key={idx} className="w-4 h-4 bg-gray-200 rounded animate-shimmer"></div>
            ))}
        </div>
        <div className="bg-gray-200 text-xs font-semibold rounded px-2.5 py-0.5 ml-3 animate-shimmer"></div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="h-4 bg-gray-200 rounded w-1/3 animate-shimmer"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3 animate-shimmer"></div>
      </div>
    </div>
  </div>
}

export const RestroMenuShimmer = () => {
  return (
    <div className="w-3/5 m-auto animate-pulse">
      <div className="flex">
        <div className="p-3">
          <div className="w-72 h-72 bg-slate-300 rounded-t-lg"></div>
        </div>
        <div className="p-8 w-full">
          <div className="h-8 bg-slate-300 rounded w-3/4 mb-4"></div>
          <div className="h-6 bg-slate-300 rounded w-1/2 mb-2"></div>
          <div className="flex items-center mt-0.5 space-x-2">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <div key={index} className="w-4 h-4 bg-slate-300 rounded-full"></div>
              ))}
            <div className="h-6 bg-slate-300 rounded w-16 ml-3"></div>
          </div>
          <div className="flex items-center gap-8 mt-5">
            <div className="h-6 bg-slate-300 rounded w-1/4"></div>
            <div className="h-6 bg-slate-300 rounded w-1/4"></div>
            <div className="h-6 bg-slate-300 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
