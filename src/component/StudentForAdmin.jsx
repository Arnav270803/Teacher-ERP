{/*path StudentForAdmin.jsx -> pages -> AdminStudent.jsx -> App.jsx */}

import React from 'react';

{/*Here all the data of the students is save , for future  */}

const StudentForAdmin = () => {
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
  {/*just small color change according to the percentage of the student */}
  const getAttendanceBarColor = (percentage) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 75) return 'bg-yellow-500';
    if (percentage >= 60) return 'bg-orange-500';
    return 'bg-red-500';
  };
  /*<------------------------------------------------------------------------Styling Staring--------------------------------------------------------------------> */

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Students List</h1>
      
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
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b text-sm text-gray-900">{student.name}</td>
                <td className="px-6 py-4 border-b text-sm text-gray-900">{student.rollNumber}</td>
                <td className="px-6 py-4 border-b text-sm text-gray-900">{student.email}</td>
                <td className="px-6 py-4 border-b">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{student.attendancePercentage}%</span>
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
    </div>
  );
};

export default StudentForAdmin;