import Link from 'next/link';
import { useState } from 'react';
import { addDecoration } from 'src/utils/addDecoration';
import styles from './SideBar.module.css';
export type DirectoryModel = {
  type: 'dir';
  directoryName: string;
  body: (FileModel | DirectoryModel)[];
  isDisplay: boolean;
  depth: number;
  id: string;
};

export type FileModel = {
  type: 'file';
  fileName: string;
  url?: string;
};

const Spacer = (props: { space: number }) => (
  <div className={styles['spacer']}>
    {[...Array(props.space)].map((_, i) => (
      <div key={i} />
    ))}
  </div>
);

export const SideBar = () => {
  const [side, setSide] = useState(
    addDecoration({
      type: 'dir',
      directoryName: 'INIAD.ts-job-site',
      body: [
        { type: 'dir', directoryName: 'welcome', body: [{ type: 'file', fileName: 'README.md' }] },
        {
          type: 'dir',
          directoryName: 'members',
          body: [
            { type: 'file', fileName: 'members', url: './members' },
            {
              type: 'dir',
              directoryName: '24graduates',
              body: [
                { type: 'file', fileName: 'aaa' },
                { type: 'file', fileName: 'iii' },
              ],
            },
            {
              type: 'dir',
              directoryName: '25graduates',
              body: [
                { type: 'file', fileName: 'uuu' },
                {
                  type: 'dir',
                  directoryName: 'part-time-job',
                  body: [
                    { type: 'file', fileName: 'eee' },
                    { type: 'file', fileName: 'ooo' },
                  ],
                },
                {
                  type: 'dir',
                  directoryName: 'intern',
                  body: [
                    { type: 'file', fileName: 'kkk' },
                    { type: 'file', fileName: 'sss' },
                  ],
                },
                {
                  type: 'dir',
                  directoryName: 'job-hunting',
                  body: [
                    { type: 'file', fileName: 'ttt' },
                    { type: 'file', fileName: 'nnn', url: './members/nnn' },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'dir',
          directoryName: 'contact',
          body: [{ type: 'file', fileName: 'contact', url: './contact' }],
        },
      ],
      isDisplay: true,
    })
  );
  const deleteTab = (id: string) => {
    const searchSide: DirectoryModel = JSON.parse(JSON.stringify(side));
    const deleteTabRecursive = (obj: DirectoryModel) => {
      if (obj.id === id) {
        obj.isDisplay = !obj.isDisplay;
        setSide(searchSide);
      } else {
        obj.body
          .filter((s): s is DirectoryModel => s.type === 'dir')
          .forEach((dir) => deleteTabRecursive(dir));
      }
    };
    deleteTabRecursive(searchSide);
  };

  const Mapper = (props: { obj: DirectoryModel }) => (
    <div className={styles['mapper-container']}>
      <div className={styles.column} onClick={() => deleteTab(props.obj.id)}>
        <Spacer space={props.obj.depth} />
        <div className={styles['column-inner']}>
          <div
            className={styles.arrow}
            style={props.obj.isDisplay ? { transform: 'rotate(90deg)' } : {}}
          />
          {props.obj.directoryName}
        </div>
      </div>
      {props.obj.isDisplay && (
        <div>
          {props.obj.body.map((o, i) =>
            o.type === 'dir' ? (
              <Mapper obj={o} key={o.id} />
            ) : (
              <div key={i}>
                <div className={`${styles.column} ${styles['link-column']}`}>
                  <Spacer space={props.obj.depth} />
                  <Link href={o.url ?? `./${Math.random()}`} className={styles.link}>
                    {o.fileName}
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles['column-top']}>
        <Spacer space={1} />
        エクスプローラー
      </div>
      <Mapper obj={side} />
    </div>
  );
};
