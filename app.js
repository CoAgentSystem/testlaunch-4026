const { useState, useEffect } = React;

function App() {
    const [mockups, setMockups] = useState([]);
    const [selectedMockup, setSelectedMockup] = useState(null);

    useEffect(() => {
        // Load mock data
        setMockups(MOCK_DATA);
    }, []);

    const handleSelectMockup = (mockup) => {
        setSelectedMockup(mockup);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">TestLaunch</h1>
                <p className="text-gray-300 mt-2">Quickly validate and prototype your startup ideas</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700">
                        <h2 className="text-2xl font-semibold mb-4">Mockup Creator</h2>
                        <p className="text-gray-400 mb-6">Drag and drop elements to design your idea.</p>
                        <div className="bg-gray-900/80 rounded-xl p-4 h-64 flex items-center justify-center border border-gray-600">
                            <p className="text-gray-500">Interactive mockup area (simulated)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700">
                        <h2 className="text-2xl font-semibold mb-4">Your Mockups</h2>
                        <div className="space-y-4">
                            {mockups.map(mockup => (
                                <div 
                                    key={mockup.id} 
                                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${selectedMockup && selectedMockup.id === mockup.id ? 'bg-blue-900/30 border border-blue-500' : 'bg-gray-900/50 hover:bg-gray-700/50 border border-gray-700'}`}
                                    onClick={() => handleSelectMockup(mockup)}
                                >
                                    <h3 className="font-medium">{mockup.name}</h3>
                                    <p className="text-sm text-gray-400">{mockup.feedbackCount} feedbacks</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {selectedMockup && (
                <div className="mt-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700 animate-fadeIn">
                    <h3 className="text-xl font-semibold mb-2">Selected: {selectedMockup.name}</h3>
                    <p className="text-gray-300">{selectedMockup.description}</p>
                    <div className="mt-4 flex items-center space-x-4">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">Share Link</button>
                        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">View Analytics</button>
                    </div>
                </div>
            )}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));