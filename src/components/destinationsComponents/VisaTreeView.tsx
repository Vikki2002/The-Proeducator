import * as React from 'react';
import VisaTree from '../shared/TreeView';

const VisaTreeView = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto w-full p-2.5">
        <header className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 rounded-t-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-white">Student Visa Process</h1>
        </header>
        <VisaTree />
      </div>
    </div>
  );
};

export default VisaTreeView;