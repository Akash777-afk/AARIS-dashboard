import { useState } from 'react';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const sidebarButtons = [
    { index: 0, top: 77,  src: '/Icon-2.svg',  isTop: true  },
    { index: 1, top: 202, src: '/Icon-7.svg',  isTop: false },
    { index: 2, top: 327, src: '/Icon-14.svg', isTop: false },
    { index: 3, top: 452, src: '/Icon-6.svg',  isTop: false },
    { index: 4, top: 577, src: '/Icon-5.svg',  isTop: false },
    { index: 5, top: 702, src: '/Icon-4.svg',  isTop: false },
    { index: 6, top: 827, src: '/Icon-3.svg',  isTop: false },
  ];

  return (
    <div className={styles.landingPage}>
      <div className={styles.landingPageChild} />
      <div className={styles.landingPageItem} />
      <div className={styles.landingPageInner} />

      {/* ── STAT CARDS ── */}
      <div className={styles.component1}>
        <div className={styles.container}>
          <div className={styles.text}>
            <div className={styles.alertsActive}>3 alerts active</div>
          </div>
          <div className={styles.services}>Services</div>
          <div className={styles.down}>Down</div>
          <div className={styles.atRisk}>At Risk</div>
          <div className={styles.div}>2</div>
          <div className={styles.div2}>1</div>
          <img className={styles.icbaselineDevicesIcon} src="/fluent-mdl2_c-r-m-services.svg" alt="" />
          <img className={styles.containerChild} src="/Ellipse 20-1.svg" alt="" />
        </div>
        <div className={styles.container2}>
          <div className={styles.text2}>
            <div className={styles.alertsActive}>Needs attention</div>
          </div>
          <div className={styles.devices}>Devices</div>
          <div className={styles.down}>Major</div>
          <div className={styles.atRisk}>Critical</div>
          <div className={styles.div}>2</div>
          <div className={styles.div2}>1</div>
          <img className={styles.containerItem} src="/Ellipse 20.svg" alt="" />
          <img className={styles.icbaselineDevicesIcon} src="/ic_baseline-devices.svg" alt="" />
        </div>
        <div className={styles.container3}>
          <div className={styles.text3}>
            <div className={styles.alertsActive}>20.7% active rate</div>
          </div>
          <div className={styles.users}>Users</div>
          <div className={styles.down}>Total</div>
          <div className={styles.atRisk}>Active</div>
          <div className={styles.div5}>240</div>
          <div className={styles.div6}>1711</div>
          <img className={styles.containerInner} src="/Group 427318279.svg" alt="" />
          <img className={styles.ciusersIcon} src="/ci_users.svg" alt="" />
        </div>
      </div>

      {/* ── TOP SLOW APIs ── */}
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.text4}>
          <div className={styles.ms}>618,882 ms</div>
          <img className={styles.icon} src="/Icon-13.svg" alt="" />
        </div>
        <div className={styles.text5}>
          <div className={styles.ms}>182,788 ms</div>
          <img className={styles.icon} src="/Icon-13.svg" alt="" />
        </div>
        <div className={styles.div7}>10.240.72.145</div>
        <div className={styles.div8}>10.240.72.145</div>
        <div className={styles.linkstatus}>linkStatus</div>
        <div className={styles.cmfMise}>CMF - Mise (DJP)</div>
        <div className={styles.cmfMise2}>CMF - Mise (Automation)</div>
        <div className={styles.getcfs}>getCFS</div>
        <div className={styles.div9}>2026-03-20</div>
        <div className={styles.div10}>2026-03-20</div>
        <div className={styles.topSlowApis}>Top Slow APIs</div>
        <img className={styles.groupItem} src="/Frame 427319229.svg" alt="" />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <div className={styles.serviceName}>SERVICE NAME</div>
          <div className={styles.apiPoint}>API POINT</div>
          <div className={styles.latencyMs}>LATENCY (ms)</div>
          <div className={styles.lastChecked}>LAST CHECKED</div>
          <div className={styles.host}>HOST</div>
        </div>
        <img className={styles.icroundRefreshIcon} src="/ic_round-refresh.svg" alt="" />
        <div className={styles.text6}>
          <div className={styles.sortBy}>Sort by...</div>
          <img className={styles.flowbitesortOutlineIcon} src="/flowbite_sort-outline.svg" alt="" />
        </div>
        <div className={styles.text7}>
          <div className={styles.searchByHost}>Search by host...</div>
          <img className={styles.icon3} src="/Icon-1.svg" alt="" />
        </div>
        <img className={styles.qlementineIconsmenuDots16} src="/qlementine-icons_menu-dots-16.svg" alt="" />
      </div>

      {/* ── DELAY QUERIES ── */}
      <div className={styles.rectangleContainer}>
        <div className={styles.rectangleDiv} />
        <div className={styles.text8}>
          <div className={styles.noDelays}>No Delays</div>
        </div>
        <img className={styles.iconParkOutlinehistoryQuer} src="/icon-park-outline_history-query.svg" alt="" />
        <div className={styles.delayQueries}>Delay Queries</div>
        <div className={styles.cpDelayQueriesParent}>
          <div className={styles.cpDelayQueries}>{`cp delay QUERIES `}</div>
          <div className={styles.groupDiv}>
            <div className={styles.groupChild2} />
            <div className={styles.noDelayQueries}>{`No delay queries observed CP DB `}</div>
            <img className={styles.zondiconsrefresh} src="/ic_round-refresh.svg" alt="" />
          </div>
        </div>
        <div className={styles.evmDelayQueriesParent}>
          <div className={styles.cpDelayQueries}>{`EVM delay QUERIES `}</div>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild3} />
            <div className={styles.noDelayQueries2}>{`No delay queries observed in EVM DB `}</div>
            <img className={styles.zondiconsrefresh2} src="/zondicons_refresh.svg" alt="" />
          </div>
        </div>
        <div className={styles.cpBlockingQueriesParent}>
          <div className={styles.cpDelayQueries}>CP Blocking queries</div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild3} />
            <div className={styles.noDelayQueries3}>{`No delay queries observed in CP DB `}</div>
            <img className={styles.zondiconsrefresh3} src="/zondicons_refresh.svg" alt="" />
          </div>
        </div>
        <img className={styles.icroundRefreshIcon2} src="/zondicons_refresh.svg" alt="" />
      </div>

      {/* ── PROBLEMS ── */}
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild5} />
          <img className={styles.frameIcon} src="\Frame 427319230.svg" alt="" />
          <img className={styles.icroundRefreshIcon} src="/ic_round-refresh.svg" alt="" />
          <div className={styles.text9}>
            <div className={styles.sortBy}>Sort by...</div>
            <img className={styles.flowbitesortOutlineIcon} src="/flowbite_sort-outline.svg" alt="" />
          </div>
          <div className={styles.text10}>
            <div className={styles.searchByHost}>Search by host...</div>
            <img className={styles.icon3} src="/Icon-10.svg" alt="" />
          </div>
          <div className={styles.div11}>10.240.72.145</div>
          <div className={styles.highMemoryUtilization}>High memory utilization</div>
          <div className={styles.raised}>Raised</div>
          <div className={styles.div12}>2026-03-19 09:32:15</div>
          <div className={styles.h15m}>2h 15m</div>
          <div className={styles.text11}><div className={styles.average}>Average</div></div>
          <img className={styles.materialSymbolsinfoOutlineIcon} src="/material-symbols_info-outline.svg" alt="" />
          <div className={styles.div13}>10.240.72.145</div>
          <div className={styles.highDiskUtilization}>High Disk utilization</div>
          <div className={styles.raised2}>Raised</div>
          <div className={styles.div14}>2026-03-19 09:32:15</div>
          <div className={styles.h15m2}>2h 15m</div>
          <img className={styles.materialSymbolsinfoOutlineIcon2} src="/material-symbols_info-outline.svg" alt="" />
          <div className={styles.div15}>10.240.72.145</div>
          <div className={styles.highCpuUtilization}>High CPU utilization</div>
          <div className={styles.raised3}>Raised</div>
          <div className={styles.div16}>2026-03-19 09:32:15</div>
          <div className={styles.h15m3}>2h 15m</div>
          <img className={styles.materialSymbolsinfoOutlineIcon3} src="/material-symbols_info-outline.svg" alt="" />
          <div className={styles.div17}>10.240.72.145</div>
          <div className={styles.highMemoryUtilization2}>High memory utilization</div>
          <div className={styles.raised4}>Raised</div>
          <div className={styles.div18}>2026-03-19 09:32:15</div>
          <div className={styles.h15m4}>2h 15m</div>
          <div className={styles.text12}><div className={styles.average}>Average</div></div>
          <img className={styles.materialSymbolsinfoOutlineIcon4} src="/material-symbols_info-outline.svg" alt="" />
          <div className={styles.div19}>10.240.72.145</div>
          <div className={styles.highMemoryUtilization3}>High memory utilization</div>
          <div className={styles.raised5}>Raised</div>
          <div className={styles.div20}>2026-03-19 09:32:15</div>
          <div className={styles.h15m5}>2h 15m</div>
          <div className={styles.text13}><div className={styles.average}>Average</div></div>
          <img className={styles.materialSymbolsinfoOutlineIcon5} src="/material-symbols_info-outline.svg" alt="" />
          <div className={styles.text14}><div className={styles.average}>High</div></div>
          <div className={styles.text15}><div className={styles.average}>High</div></div>
          <img className={styles.qlementineIconsmenuDots16} src="/qlementine-icons_menu-dots-16.svg" alt="" />
        </div>
        <div className={styles.problemsParent}>
          <div className={styles.problems}>Problems</div>
          <div className={styles.groupChild6} />
          <div className={styles.severity}>SEVERITY</div>
          <div className={styles.problem}>PROBLEM</div>
          <div className={styles.ticket}>TICKET</div>
          <div className={styles.timeSnap}>TIME SNAP</div>
          <div className={styles.age}>AGE</div>
          <div className={styles.action}>ACTION</div>
          <div className={styles.host2}>HOST</div>
        </div>
      </div>

      {/* ── DB REPLICATION ── */}
      <div className={styles.landingPageInner2}>
        <div className={styles.rectangleParent5}>
          <div className={styles.frameChild} />
          <div className={styles.dbReplicationStatus}>DB Replication Status</div>
          <div className={styles.container4}>
            <div className={styles.container5} />
          </div>
          <div className={styles.iconParent}>
            <img className={styles.icon5} src="/Icon-9.svg" alt="" />
            <div className={styles.statusbadge}>
              <div className={styles.synced}>Synced</div>
            </div>
          </div>
          <img className={styles.frameItem} src="/Group 427318289.svg" alt="" />
          <div className={styles.rectangleParent6}><div className={styles.groupChild7} /><div className={styles.div21}>10.240.72.145</div></div>
          <div className={styles.rectangleParent7}><div className={styles.groupChild7} /><div className={styles.div21}>10.240.72.145</div></div>
          <div className={styles.rectangleParent8}><div className={styles.groupChild7} /><div className={styles.div21}>10.240.72.145</div></div>
          <div className={styles.div24}>→</div>
          <div className={styles.div25}>-</div><div className={styles.div26}>-</div>
          <div className={styles.div27}>-</div><div className={styles.div28}>-</div>
          <div className={styles.div29}>-</div><div className={styles.div30}>-</div>
          <div className={styles.div31}>-</div><div className={styles.div32}>-</div>
          <div className={styles.div33}>→</div>
          <div className={styles.cfmprodCp}>CFMPROD_CP</div>
          <div className={styles.container6}>
            <div className={styles.cfmprodEvm}>CFMPROD_EVM</div>
            <div className={styles.container7}>
              <img className={styles.icon6} src="/Icon-11.svg" alt="" />
              <div className={styles.statusbadge2}><div className={styles.notSynced}>Not Synced</div></div>
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.rectangleParent9}><div className={styles.groupChild7} /><div className={styles.div21}>10.240.72.145</div></div>
              <div className={styles.rectangleParent10}><div className={styles.groupChild7} /><div className={styles.div21}>10.240.72.145</div></div>
              <div className={styles.rectangleParent11}><div className={styles.groupChild7} /><div className={styles.div21}>10.240.72.145</div></div>
              <div className={styles.div37}>-</div><div className={styles.div38}>-</div>
              <div className={styles.div39}>-</div><div className={styles.div40}>-</div>
              <div className={styles.div41}>-</div><div className={styles.div42}>-</div>
              <div className={styles.div43}>-</div><div className={styles.div44}>-</div>
              <div className={styles.div45}>→</div>
            </div>
            <img className={styles.icon7} src="/Icon-15.svg" alt="" />
          </div>
          <img className={styles.icroundRefreshIcon4} src="/ic_round-refresh.svg" alt="" />
          <img className={styles.fluentstatus12RegularIcon} src="/fluent_status-12-regular.svg" alt="" />
          <img className={styles.frameInner} src="/Group 427319467.svg" alt="" />
        </div>
      </div>

      {/* ── SIDEBAR (interactive) ── */}
      <div className={styles.sidebar}>
        {sidebarButtons.map(({ index, top, src, isTop }) => (
          <div
            key={index}
            className={`${isTop ? styles.button7 : styles.button} ${activeButton === index ? styles.buttonActive : ''}`}
            style={{ top: `${top}px` }}
            onClick={() => setActiveButton(index)}
          >
            {activeButton === index && <div className={styles.buttonGlow} />}
            <img className={styles.icon8} src={src} alt="" />
          </div>
        ))}
      </div>

      {/* ── TOPBAR ── */}
      <div className={styles.topbarParent}>
        <div className={styles.topbar}>
          <div className={styles.text16} />
          <div className={styles.vectorParent}>
            <img className={styles.instanceChild} src="/Rectangle 169.svg" alt="" />
            <div className={styles.welcomeToAaris}>Welcome to AARIS dashboard</div>
          </div>
          <div className={styles.textInputParent}>
            {/* Search — real input */}
            <div className={`${styles.textInput} ${searchFocused ? styles.textInputFocused : ''}`}>
              <img className={styles.icon15} src="/Icon-1.svg" alt="" />
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Search services, devices, or alerts..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <img className={styles.iconParkOutlinevoice} src="/icon-park-outline_voice.svg" alt="" />
            </div>
            <div className={styles.iconButton}>
              <img className={styles.buttonIcon} src="/Icon.svg" alt="" />
            </div>
            <div className={styles.buttonParent}>
              <div className={styles.iconButton}>
                <img className={styles.buttonIcon2} src="/material-symbols_menu-rounded.svg" alt="" />
              </div>
              <div className={styles.button8}>
                <img className={styles.materialSymbolsmenuRoundedIcon} src="/weui_time-outlined.svg" alt="" />
                <div className={styles.timePeriod}>Time period</div>
                <div className={styles.april2024}>28 April 2024 - 28 May 2024</div>
                <img className={styles.iconParkSoliddownOne} src="/icon-park-solid_down-one.svg" alt="" />
              </div>
              <div className={styles.iconButton}>
                <img className={styles.buttonIcon3} src="/Icon-8.svg" alt="" />
              </div>
              <img className={styles.t12Icon} src="/t1 2.png" alt="" />
              <div className={styles.uilcalender} />
            </div>
          </div>
        </div>
        <div className={styles.ellipseDiv} />
      </div>
    </div>
  );
};

export default LandingPage;