"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { User } from "@/lib/types";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<any[]>("/users").then((res) => {
      const mapped: User[] = res.data.map((u) => ({
        id: u.id,
        name: `${u.name.firstname} ${u.name.lastname}`,
        email: u.email,
        role: u.id === 1 ? "admin" : "user",
        joined: new Date(Date.now() - u.id * 86400000 * 10).toISOString().split("T")[0],
      }));
      setUsers(mapped);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="space-y-2 max-w-7xl mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-14 w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Users</h1>
      <div className="border rounded-xl overflow-x-auto bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <table className="w-full text-sm min-w-[600px]">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold">Name</th>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold hidden sm:table-cell">Email</th>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold">Role</th>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold hidden md:table-cell">Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      {u.name.charAt(0)}
                    </div>
                    <span className="text-gray-900 dark:text-white font-medium">{u.name}</span>
                  </div>
                </td>
                <td className="p-3 hidden sm:table-cell text-gray-700 dark:text-gray-300">{u.email}</td>
                <td className="p-3">
                  <Badge variant={u.role === "admin" ? "default" : "secondary"}>{u.role}</Badge>
                </td>
                <td className="p-3 hidden md:table-cell text-gray-700 dark:text-gray-300">{u.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}