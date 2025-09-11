import React, { useContext } from 'react';
import { AdminContext } from '@/context/AdminContext';

const StudentForAdmin = () => {
  // Get context values to display selected course, class, and semester
  const { selectedCourse, selectedClass, selectedSemester } = useContext(AdminContext);

  // Mock data - replace with your MySQL/Prisma data based on selected course, class, semester
  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      rollNumber: "CS001",
      email: "alice.johnson@university.edu",
      attendancePercentage: 85
    },
    {
      id: 2,
      name: "Bob Smith",
      rollNumber: "CS002", 
      email: "bob.smith@university.edu",
      attendancePercentage: 92
    },
    {
      id: 3,
      name: "Charlie Brown",
      rollNumber: "CS003",
      email: "charlie.brown@university.edu",
      attendancePercentage: 78
    },
    {
      id: 4,
      name: "Diana Prince",
      rollNumber: "CS004",
      email: "diana.prince@university.edu",
      attendancePercentage: 96
    },
    {
      id: 5,
      name: "Edward Davis",
      rollNumber: "CS005",
      email: "edward.davis@university.edu",
      attendancePercentage: 68
    },
    {
      id: 6,
      name: "Fiona Green",
      rollNumber: "CS006",
      email: "fiona.green@university.edu",
      attendancePercentage: 89
    }
  ];

  // Function to determine attendance bar color based on percentage
  const getAttendanceBarColor = (percentage) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 75) return 'bg-yellow-500';
    if (percentage >= 60) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="p-6">
      {/* Header Section - Display selected path */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Students List</h1>
        
        {/* Display the complete selection path */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">Current Selection:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-600">Course:</span>
              <span className="ml-2 text-blue-600 font-semibold">{selectedCourse || 'None'}</span>
            </div>
            <div>
              <span className="font-medium text-gray-600">Class:</span>
              <span className="ml-2 text-green-600 font-semibold">{selectedClass || 'None'}</span>
            </div>
            <div>
              <span className="font-medium text-gray-600">Semester:</span>
              <span className="ml-2 text-purple-600 font-semibold">{selectedSemester ? `Semester ${selectedSemester}` : 'None'}</span>
            </div>
          </div>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span>Path: </span>
          <span className="mx-2 text-blue-600 font-medium">{selectedCourse}</span>
          <span className="mx-2">→</span>
          <span className="mx-2 text-green-600 font-medium">{selectedClass}</span>
          <span className="mx-2">→</span>
          <span className="mx-2 text-purple-600 font-medium">Semester {selectedSemester}</span>
          <span className="mx-2">→</span>
          <span className="text-gray-800 font-medium">Students</span>
        </div>
      </div>

      {/* Students Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Roll Number</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through students array to create table rows */}
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b text-sm text-gray-900">{student.name}</td>
                <td className="px-6 py-4 border-b text-sm text-gray-900">{student.rollNumber}</td>
                <td className="px-6 py-4 border-b text-sm text-gray-900">{student.email}</td>
                <td className="px-6 py-4 border-b">
                  <div className="flex items-center space-x-2">
                    {/* Display percentage */}
                    <span className="text-sm font-medium">{student.attendancePercentage}%</span>
                    {/* Attendance progress bar */}
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getAttendanceBarColor(student.attendancePercentage)}`}
                        style={{ width: `${student.attendancePercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Future: Here you can add filters, search, or other student management features */}
      <div className="mt-6 text-sm text-gray-500">
        <p>Note: In future, this data will be filtered based on the selected course ({selectedCourse}), class ({selectedClass}), and semester ({selectedSemester}) from your database.</p>
      </div>
    </div>
  );
};

export default StudentForAdmin;