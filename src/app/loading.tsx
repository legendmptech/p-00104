const Loading = () => {

    return (
        <div className="relative">
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 100 }}>
                <div className="text-white text-xl font-semibold animate-pulse">
                    Loading...
                </div>
            </div>
        </div>
    );
};

export default Loading;
