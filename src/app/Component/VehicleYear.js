"use client"
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    {"id": 1, "year": 'Select Year'},
    {"id": 1, "year": 2024},
    {"id": 2, "year": 2023},
    {"id": 3, "year": 2022},
    {"id": 4, "year": 2021},
    {"id": 5, "year": 2020},
    {"id": 6, "year": 2019},
    {"id": 7, "year": 2018},
    {"id": 8, "year": 2017},
    {"id": 9, "year": 2016},
    {"id": 10, "year": 2015},
    {"id": 11, "year": 2014},
    {"id": 12, "year": 2013},
    {"id": 13, "year": 2012},
    {"id": 14, "year": 2011},
    {"id": 15, "year": 2010},
    {"id": 16, "year": 2009},
    {"id": 17, "year": 2008},
    {"id": 18, "year": 2007},
    {"id": 19, "year": 2006},
    {"id": 20, "year": 2005},
    {"id": 21, "year": 2004},
    {"id": 22, "year": 2003},
    {"id": 23, "year": 2002},
    {"id": 24, "year": 2001},
    {"id": 25, "year": 2000},
    {"id": 26, "year": 1999},
    {"id": 27, "year": 1998},
    {"id": 28, "year": 1997},
    {"id": 29, "year": 1996},
    {"id": 30, "year": 1995},
    {"id": 31, "year": 1994},
    {"id": 32, "year": 1993},
    {"id": 33, "year": 1992},
    {"id": 34, "year": 1991},
    {"id": 35, "year": 1990},
    {"id": 36, "year": 1989},
    {"id": 37, "year": 1988},
    {"id": 38, "year": 1987},
    {"id": 39, "year": 1986},
    {"id": 40, "year": 1985},
    {"id": 41, "year": 1984},
    {"id": 42, "year": 1983},
    {"id": 43, "year": 1982},
    {"id": 44, "year": 1981},
    {"id": 45, "year": 1980},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(people[0])

  function generateYearOptions() {
    const currentYear = new Date().getFullYear();
    const startYear = 2024;
    const endYear = 1950;
    const options = [];

    for (let year = startYear; year >= endYear; year--) {
      options.push(year.toString()); // Push year as a string
    }

    return options;
  } 


  return (
    <Listbox value={selected} onChange={setSelected} >
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">

             Select Year</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="select_year_dropdown relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A2384D] sm:text-sm sm:leading-6">
              <span className="block truncate">{selected.year}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-[#A2384D] text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-8 pr-4'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.year}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
