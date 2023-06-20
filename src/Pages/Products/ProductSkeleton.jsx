const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded">
          {/* Skeleton loader content */}
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
