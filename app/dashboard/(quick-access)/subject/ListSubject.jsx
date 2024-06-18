import { EyeIcon } from 'lucide-react';
import React from 'react'
import { FaEdit } from 'react-icons/fa';

export const ListSubject = () => {
  return (
    <div class="content container-fluid">

      <div class="page-header">

        <div class="row align-items-center">

          <h3 class="page-title">Subjects</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <Link href="">Dashboard</Link>
            </li>
            <li class="breadcrumb-item active">
              Subjects
            </li>
          </ul>

          <div class="student-group-form">
            <div class="flex">
              <div class="col-lg-3 col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search by ID ..." />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search by Name ..." />
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search by Class ..." />
                </div>
              </div>
              <div class="col-lg-2">
                <div class="search-student-btn">
                  <button type="btn" class="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="col-sm-12">
              <div class="card card-table">
                <div class="card-body">

                  <div class="page-header">
                    <div class="row align-items-center">
                      <div class="col">
                        <h3 class="page-title">Subjects</h3>
                      </div>
                      <div class="col-auto text-end float-end ms-auto download-grp">
                        <i class="fas fa-download"></i> Download
                        <i class="fas fa-plus"></i>
                      </div>
                    </div>
                  </div>

                  <div class="table-responsive">

                    <table class="table border-0 star-student table-hover table-center mb-0 datatable table-striped">
                      <thead class="student-thread">
                        <tr>
                          <th>
                            <div class="form-check check-tables">
                              <input class="form-check-input" type="checkbox" value="something" />
                            </div>
                          </th>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Class</th>
                          <th class="text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="form-check check-tables">
                              <input class="form-check-input" type="checkbox" value="something" />
                            </div>
                          </td>
                          <td>PRE2209</td>
                          <td>
                            <h2>
                              Mathematics
                            </h2>
                          </td>
                          <td>5</td>
                          <td class="flex space-x-2">
                            <EyeIcon size={10} />
                            <FaEdit size={10} />

                          </td>
                        </tr>




                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListSubject;