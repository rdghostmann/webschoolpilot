import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FeesCollection = () => {
	return (
		<div className="container mx-auto p-4">

			<div className="mb-4">
				<div className="flex items-center justify-between">
					<div>
						<h3 className="text-xl font-semibold">Fees Collections</h3>
						<ul className="flex space-x-2 text-sm text-gray-500">
							<li><Link href="/"><a>Dashboard</a></Link></li>
							<li> / </li>
							<li className="font-bold">Fees Collections</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="bg-white shadow rounded-lg">
				<div className="p-4">

					<div className="mb-4 flex items-center justify-between">
						<h3 className="text-xl font-semibold">Fees Collections</h3>
						<div className="flex space-x-2">
							<Link href="#"><a className="btn btn-outline-primary"><i className="fas fa-download"></i> Download</a></Link>
							<Link href="/add-fees-collection"><a className="btn btn-primary"><i className="fas fa-plus"></i></a></Link>
						</div>
					</div>

					<div className="overflow-x-auto">
						<table className="min-w-full bg-white divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees Type</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
									<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid Date</th>
									<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">PRE2209</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<Image className="w-8 h-8 rounded-full" src="/assets/img/profiles/avatar-01.jpg" alt="User Image" width={32} height={32} />
											<div className="ml-4">
												<Link href="#"><a className="text-sm font-medium text-gray-900">Aaliyah</a></Link>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">Female</td>
									<td className="px-6 py-4 whitespace-nowrap">Mess Fees</td>
									<td className="px-6 py-4 whitespace-nowrap">$120</td>
									<td className="px-6 py-4 whitespace-nowrap">17 Aug 2020</td>
									<td className="px-6 py-4 whitespace-nowrap text-right">
										<span className="badge bg-green-500 text-white">Paid</span>
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">PRE2213</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<Image className="w-8 h-8 rounded-full" src="/assets/img/profiles/avatar-02.jpg" alt="User Image" width={32} height={32} />
											<div className="ml-4">
												<Link href="#"><a className="text-sm font-medium text-gray-900">Malynne</a></Link>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">Female</td>
									<td className="px-6 py-4 whitespace-nowrap">Class Test</td>
									<td className="px-6 py-4 whitespace-nowrap">$56</td>
									<td className="px-6 py-4 whitespace-nowrap">05 Aug 2020</td>
									<td className="px-6 py-4 whitespace-nowrap text-right">
										<span className="badge bg-green-500 text-white">Paid</span>
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">PRE2143</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<Image className="w-8 h-8 rounded-full" src="/assets/img/profiles/avatar-03.jpg" alt="User Image" width={32} height={32} />
											<div className="ml-4">
												<Link href="#"><a className="text-sm font-medium text-gray-900">Levell Scott</a></Link>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">Male</td>
									<td className="px-6 py-4 whitespace-nowrap">Exam Fees</td>
									<td className="px-6 py-4 whitespace-nowrap">$378</td>
									<td className="px-6 py-4 whitespace-nowrap">04 Sept 2020</td>
									<td className="px-6 py-4 whitespace-nowrap text-right">
										<span className="badge bg-green-500 text-white">Paid</span>
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">PRE2431</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<Image className="w-8 h-8 rounded-full" src="/assets/img/profiles/avatar-04.jpg" alt="User Image" width={32} height={32} />
											<div className="ml-4">
												<Link href="#"><a className="text-sm font-medium text-gray-900">Minnie</a></Link>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">Female</td>
									<td className="px-6 py-4 whitespace-nowrap">Exam Fees</td>
									<td className="px-6 py-4 whitespace-nowrap">$246</td>
									<td className="px-6 py-4 whitespace-nowrap">17 Sept 2020</td>
									<td className="px-6 py-4 whitespace-nowrap text-right">
										<span className="badge bg-red-500 text-white">Unpaid</span>
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">PRE1534</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<Image className="w-8 h-8 rounded-full" src="/assets/img/profiles/avatar-05.jpg" alt="User Image" width={32} height={32} />
											<div className="ml-4">
												<Link href="#"><a className="text-sm font-medium text-gray-900">Lois A</a></Link>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">Male</td>
									<td className="px-6 py-4 whitespace-nowrap">Exam Fees</td>
									<td className="px-6 py-4 whitespace-nowrap">$56</td>
									<td className="px-6 py-4 whitespace-nowrap">02 Oct 2020</td>
									<td className="px-6 py-4 whitespace-nowrap text-right">
										<span className="badge bg-red-500 text-white">Unpaid</span>
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">PRE2153</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<Image className="w-8 h-8 rounded-full" src="/assets/img/profiles/avatar-06.jpg" alt="User Image" width={32} height={32} />
											<div className="ml-4">
												<Link href="#"><a className="text-sm font-medium text-gray-900">Calvin</a></Link>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">Male</td>
									<td className="px-6 py-4 whitespace-nowrap">Exam Fees</td>
									<td className="px-6 py-4 whitespace-nowrap">$236</td>
									<td className="px-6 py-4 whitespace-nowrap">28 Oct 2020</td>
									<td className="px-6 py-4 whitespace-nowrap text-right">
										<span className="badge bg-red-500 text-white">Unpaid</span>
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">PRE1252</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<Image className="w-8 h-8 rounded-full" src="/assets/img/profiles/avatar-07.jpg" alt="User Image" width={32} height={32} />
											<div className="ml-4">
												<Link href="#"><a className="text-sm font-medium text-gray-900">Joe Kelley</a></Link>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">Female</td>
									<td className="px-6 py-4 whitespace-nowrap">Transport Fees</td>
									<td className="px-6 py-4 whitespace-nowrap">$237</td>
									<td className="px-6 py-4 whitespace-nowrap">17 Oct 2020</td>
									<td className="px-6 py-4 whitespace-nowrap text-right">
										<span className="badge bg-green-500 text-white">Paid</span>
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">PRE1434</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<Image className="w-8 h-8 rounded-full" src="/assets/img/profiles/avatar-08.jpg" alt="User Image" width={32} height={32} />
											<div className="ml-4">
												<Link href="#"><a className="text-sm font-medium text-gray-900">Vincent</a></Link>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">Male</td>
									<td className="px-6 py-4 whitespace-nowrap">Mess Fees</td>
									<td className="px-6 py-4 whitespace-nowrap">$567</td>
									<td className="px-6 py-4 whitespace-nowrap">05 Nov 2020</td>
									<td className="px-6 py-4 whitespace-nowrap text-right">
										<span className="badge bg-green-500 text-white">Paid</span>
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">PRE2345</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<Image className="w-8 h-8 rounded-full" src="/assets/img/profiles/avatar-09.jpg" alt="User Image" width={32} height={32} />
											<div className="ml-4">
												<Link href="#"><a className="text-sm font-medium text-gray-900">Kozma Tatari</a></Link>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">Female</td>
									<td className="px-6 py-4 whitespace-nowrap">Exam Fees</td>
									<td className="px-6 py-4 whitespace-nowrap">$564</td>
									<td className="px-6 py-4 whitespace-nowrap">12 Nov 2020</td>
									<td className="px-6 py-4 whitespace-nowrap text-right">
										<span className="badge bg-green-500 text-white">Paid</span>
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">PRE2365</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<Image className="w-8 h-8 rounded-full" src="/assets/img/profiles/avatar-10.jpg" alt="User Image" width={32} height={32} />
											<div className="ml-4">
												<Link href="#"><a className="text-sm font-medium text-gray-900">John Chambers</a></Link>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">Male</td>
									<td className="px-6 py-4 whitespace-nowrap">Class Test</td>
									<td className="px-6 py-4 whitespace-nowrap">$234</td>
									<td className="px-6 py-4 whitespace-nowrap">15 Nov 2020</td>
									<td className="px-6 py-4 whitespace-nowrap text-right">
										<span className="badge bg-green-500 text-white">Paid</span>
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">PRE1234</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<Image className="w-8 h-8 rounded-full" src="/assets/img/profiles/avatar-11.jpg" alt="User Image" width={32} height={32} />
											<div className="ml-4">
												<Link href="#"><a className="text-sm font-medium text-gray-900">Nathan Humphries</a></Link>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">Male</td>
									<td className="px-6 py-4 whitespace-nowrap">Exam Fees</td>
									<td className="px-6 py-4 whitespace-nowrap">$278</td>
									<td className="px-6 py-4 whitespace-nowrap">17 Nov 2020</td>
									<td className="px-6 py-4 whitespace-nowrap text-right">
										<span className="badge bg-green-500 text-white">Paid</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
			</div>
		</div>
	)
}

export default FeesCollection
